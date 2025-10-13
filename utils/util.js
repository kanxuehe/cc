// // 先获取全部答案
window._answer = [];
// 提取全部题目函数
function getTextContentAsArray(className) {
  const elements = document.querySelectorAll(className);
  const result = Array.from(elements).map((element) => element.textContent);

  return result;
}
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
        result.push(`\n\n![SkillUpp Image](${child.src})\n\n`);
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
const answerList = document.querySelectorAll(".css-1lsgdlu");
answerList.forEach((item, index) => {
  item.click();
  setTimeout(() => {
    window._answer.push(
      extractContent(
        document.querySelectorAll(".css-106flku .css-1ma9zj9")[index]
      )
    );
  }, 500);
});

// 处理全部数据
function getResult(
  titleClassName = ".css-r0xajv",
  questionClassName = ".css-1kkjirn",
  calculatorClassName = ".css-njc01w",
  difficultyClassName = ".css-lt7f38",
  difficultyLevelClassName = ".css-jkscjg"
) {
  // 提取问题,可能包含图片
  function getQuestionStr(className) {
    const elements = document.querySelectorAll(className);
    const result = Array.from(elements).map((element) => {
      return extractContent(element);
    });
    return result;
  }

  // 提取全部题目函数
  function getDifficultyLevelList(className) {
    const elements = document.querySelectorAll(className);
    const result = Array.from(elements).map((element) =>
      element
        .getAttribute("aria-label")
        .replace(" Stars", "")
        .replace(" Star", "")
    );

    return result;
  }

  function getMaxMarkAndContent(str) {
    // 1. 提取 [Maximum mark: 6] 里的数字
    const markMatch = str.match(/\[Maximum mark:\s*(\d+)\]/);
    const mark = markMatch ? markMatch[1] : null;

    // 2. 提取后面的全部内容
    const content = str.replace(/\[Maximum mark:\s*\d+\]\n?/, "");
    return [mark, content];
  }
  const type = document.querySelector(".css-180s806")?.textContent || "";
  const defaultResultItem = {
    topicId: "topic-uuid",
    topicItemId: "topic-item-uuid",
    type,
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
  const titleList = getTextContentAsArray(titleClassName);
  const questionList = getQuestionStr(questionClassName);
  const calculatorList = getTextContentAsArray(calculatorClassName);
  const difficultyList = getTextContentAsArray(difficultyClassName);
  const difficultyLevelList = getDifficultyLevelList(difficultyLevelClassName);
  console.log(
    titleList,
    questionList,
    calculatorList,
    difficultyList,
    difficultyLevelList
  );
  const result = questionList.map((question, index) => {
    const [maxMark, content] = getMaxMarkAndContent(question);
    return {
      ...defaultResultItem,
      title: titleList[index],
      content,
      markScheme: window._answer[index],
      paper: calculatorList[index] === "no calculator" ? "PAPER1" : "PAPER2",
      difficulty: difficultyList[index].toUpperCase(),
      calculator: calculatorList[index] === "no calculator" ? false : true,
      maxMark,
      difficultyLevel: difficultyLevelList[index],
    };
  });

  const filePathArr = location.pathname.split("/");
  const filePath = `${filePathArr[1]}/${filePathArr[2]}`;
  const fileName = document.querySelector(".css-rev78e span").textContent;
  fetch("http://localhost:2242/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: result, filePath, fileName }),
  });
  return result;
}

getResult();

// 获取category
function getCategory(
  fullNameClassName = ".css-1dv04ps",
  nameClassName = ".css-13oos9x",
  childrenClassName = ".css-isbt42"
) {
  const fullNameList = getTextContentAsArray(fullNameClassName);
  const nameList = getTextContentAsArray(nameClassName);
  // 提取全部题目函数
  function getTextContentAsArray(className) {
    const elements = document.querySelectorAll(className);
    const result = Array.from(elements).map((element) => element.textContent);

    return result;
  }
  function getChildren(index) {
    const defaultChild = {
      name: "", // "Topic 1 All",
      description: "", // "All Questions in Topic 1 Number & Algebra",
      type: "ALL",
      slug: "", //"number-and-algebra",
      sort: 1,
    };
    const childrenDom = document.querySelectorAll(childrenClassName)[index];
    const nameList = Array.from(
      childrenDom.querySelectorAll(".css-19lu5f5")
    ).map((element) => element.textContent);
    const descriptionList = Array.from(
      childrenDom.querySelectorAll(".css-jr56j6")
    ).map((element) => element.textContent);
    const slugList = Array.from(
      childrenDom.querySelectorAll(".css-1uri588")
    ).map((element) => {
      if (!element.href) {
        return "";
      }
      const str = element.href.split("questionbank/")[1];
      const result = str.slice(0, -1);
      return result;
    });
    const childrenList = nameList.map((name, ind) => {
      const description = descriptionList[ind];
      const slug = slugList[ind];
      return {
        ...defaultChild,
        name,
        description,
        slug,
      };
    });
    return childrenList;
  }
  const defaultItem = {
    name: "", // "Topic 1",
    fullName: "", // "Number & Algebra",
    slug: "", // "number-and-algebra",
    sort: 1,
    children: [],
  };

  const result = fullNameList.map((fullName, index) => {
    const children = getChildren(index);
    return {
      ...defaultItem,
      name: nameList[index],
      fullName: fullName,
      slug: children[0].slug,
      children,
    };
  });
  return result;
}

// function getType(fileName) {
//   const indexArr = [...document.querySelectorAll(".css-r0xajv")].map((item) => {
//     const result = item.textContent.replace("Question ", "");
//     return result;
//   });
//   const type = document.querySelector(".css-180s806").textContent;
//   const filePathArr = location.pathname.split("/");
//   const filePath = `${filePathArr[1]}/${filePathArr[2]}`;
//   fetch("http://localhost:2242/updateType", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ fileName, filePath, type, indexArr }),
//   });
// }

// function groupData(fileName) {
//   // 提取问题,可能包含图片
//   function getQuestionStr(className = ".css-9axr9m") {
//     const elements = document.querySelectorAll(className);
//     const result = Array.from(elements).map((element) => {
//       const question = extractContent(element);
//       const [maxMark, content] = getMaxMarkAndContent(question);
//       return content;
//     });
//     return result;
//   }

//   function getMaxMarkAndContent(str) {
//     // 1. 提取 [Maximum mark: 6] 里的数字
//     const markMatch = str.match(/\[Maximum mark:\s*(\d+)\]/);
//     const mark = markMatch ? markMatch[1] : null;

//     // 2. 提取后面的全部内容
//     const content = str.replace(/\[Maximum mark:\s*\d+\]\n?/, "");
//     return [mark, content];
//   }

//   function extractContent(node) {
//     let result = [];

//     node.childNodes.forEach((child) => {
//       if (child.nodeType === Node.ELEMENT_NODE) {
//         if (child.tagName.toLowerCase() === "img") {
//           result.push(`\n\n![SkillUpp Image](${child.src})\n\n`);
//         } else {
//           result.push(...extractContent(child)); // 递归遍历子节点
//         }
//       } else if (child.nodeType === Node.TEXT_NODE) {
//         const text = child.textContent.trim();
//         if (text) {
//           result.push(text);
//         }
//       }
//     });

//     return result.join("");
//   }
//   const questionArr = getQuestionStr();
//   const filePathArr = location.pathname.split("/");
//   const filePath = `${filePathArr[1]}/${filePathArr[2]}`;
//   const newFileName = document.querySelector(".css-rev78e span").textContent;
//   fetch("http://localhost:2242/groupData", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ fileName, filePath, questionArr, newFileName }),
//   });
// }
