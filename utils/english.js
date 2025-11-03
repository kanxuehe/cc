function extractContent(node, depth = 0) {
  let result = [];

  node.childNodes.forEach((child, index) => {
    if (
      child.nodeType === Node.ELEMENT_NODE &&
      child.className !== "katex-html" &&
      child.tagName !== "mrow" &&
      child.tagName !== "mtable"
    ) {
      const tag = child.tagName.toLowerCase();
      if (tag === "img") {
        result.push(`![SkillUpp Image](${child.src})\n\n`);
      } else if (tag === "span" && child.className === "marks") {
        result.push(child.outerHTML);
      } else if (
        tag !== "svg" &&
        tag !== "path" &&
        child?.className === "katex-display"
      ) {
        const indent = "  ".repeat(depth);
        result.push(
          ...[
            `\n${indent}$$\n${indent}`,
            ...extractContent(child, depth),
            `\n${indent}$$\n`,
          ]
        );
      } else if (tag === "li") {
        // 给 ol 里的 li 加上 "- "
        const parentTag = child.parentElement?.tagName?.toLowerCase();
        if (parentTag === "ol" || parentTag === "ul") {
          const indent = "  ".repeat(depth);
          const arr = [...extractContent(child, depth + 1)];
          const aaa = arr.map((item, index) => {
            if (index === 0 || index === arr.length - 1) {
              return item.trim();
            }
            return item;
          });
          result.push(
            ...[`${depth > 0 && index === 0 ? "\n" : ""}${indent}- `, ...aaa]
          );
        }
      } else if (
        tag !== "svg" &&
        tag !== "path" &&
        child?.className === "katex"
      ) {
        const parentClassName = child.parentElement?.className;
        if (parentClassName === "katex-display") {
          result.push(...extractContent(child, depth));
        } else {
          result.push(...["$", ...extractContent(child, depth), "$"]);
        }
      } else if (tag === "annotation") {
        result.push(...extractContent(child, depth));
      } else {
        const parentTag = child.parentElement?.tagName?.toLowerCase();
        const arr = [...extractContent(child, depth)];
        if (parentTag === "li") {
          // 如果父节点是li,则该节点需要根据层级进行缩进
          const indent = "  ".repeat(depth);
          // if (index !== 0 && !child.className.includes("katex")) {
          //   arr.unshift(indent);
          // }
          arr.forEach((item) => {
            item = item.replace(/\n/g, `\n${indent}`);
          });
          if (index > 1) {
            //li下面,第二个节点开始都需要加缩进, 注意:li下面第1个节点是::marker ,所以下标为1表示第一个有效节点
            arr.unshift(indent);
          }
          result.push(...arr);
          return;
        }
        result.push(...arr); // 递归遍历子节点
      }
    } else if (child.nodeType === Node.TEXT_NODE) {
      let text = child.textContent;
      const parentTag = child.parentElement?.tagName?.toLowerCase();
      if (parentTag === "annotation") {
        // 公式里的换行后面也要跟缩进
        text = text.replace(/\n/g, `\n${"  ".repeat(depth)}`);
      }
      if (text) {
        result.push(text);
      }
    }
  });

  return result.join("");
}
function getQuestionAndMarkSchemeStr(className) {
  const elements = document.querySelectorAll(className);
  const list = Array.from(elements);
  const halfList = list.splice(list.length / 2, list.length);
  const result = halfList.map((element) => {
    const titleDom = element.querySelector(".css-1ma9zj9");
    const markSchemeDom = element.querySelector(".css-62z1t0");
    return [extractContent(titleDom), extractContent(markSchemeDom)];
  });
  return result;
}
function getTextContentAsArray(className) {
  const elements = document.querySelectorAll(className);
  const result = Array.from(elements).map((element) => element.textContent);

  return result;
}
function getDifficultyList(className) {
  const list = getTextContentAsArray(className);
  const halfList = list.splice(list.length / 2, list.length);
  return halfList;
}

function getDifficultyLevelList(className) {
  const elements = document.querySelectorAll(className);
  const list = Array.from(elements);
  const halfList = list.splice(list.length / 2, list.length);
  const result = halfList.map((element) =>
    element
      .getAttribute("aria-label")
      .replace(" Stars", "")
      .replace(" Star", "")
  );

  return result;
}

function getArticle() {
  // 提取问题,可能包含图片
  const element = document.querySelectorAll(".css-6q7m68")[0];
  return extractContent(element);
}

function getEnglishQuestions() {
  function numToLetter(num) {
    return String.fromCharCode(97 + num); // 97 是 'a' 的 ASCII 码
  }
  const questionAndMarkSchemeList = getQuestionAndMarkSchemeStr(
    ".MuiStack-root .css-1haxhp9"
  );
  const difficultyList = getDifficultyList(".css-lt7f38");
  const difficultyLevelList = getDifficultyLevelList(".css-jkscjg");
  const defaultResultItem = {
    topicId: "topic-uuid",
    topicItemId: "topic-item-uuid",
    type: "English",
    title: "", // 标题
    // 问题
    content: "",
    // 答案
    markScheme: "",
    // paper   PAPER1（不允许使用计算器 - calculator false） ｜ PAPER2 （允许使用计算器 calculator true）
    paper: "PAPER1",
    // 难易程度 EASY ｜ MEDIUM | HARD
    difficulty: "",
    calculator: false,
    sort: 1,
    // 题目的分数
    maxMark: "",
    // 评级
    difficultyLevel: "",
  };
  const result = questionAndMarkSchemeList.map((item, index) => {
    const title = numToLetter(index);
    return {
      ...defaultResultItem,
      title,
      content: item[0],
      markScheme: item[1],
      difficulty: difficultyList[index].toUpperCase(),
      difficultyLevel: difficultyLevelList[index],
    };
  });
  const filePathArr = location.pathname.split("/");
  const filePath = `${filePathArr[1]}/${filePathArr[2]}/${filePathArr[5]}`;
  const fileName = document.querySelector(".css-166e3nw span").textContent;
  fetch("http://localhost:2242/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: result, filePath, fileName }),
  });
}
