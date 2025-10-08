// // 先获取全部答案
window._answer = [];
// 提取全部题目函数
function getTextContentAsArray(className) {
  const elements = document.querySelectorAll(className);
  const result = Array.from(elements).map((element) => element.textContent);

  return result;
}
function extractContent(node) {
  let result = [];

  node.childNodes.forEach((child) => {
    if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== "math") {
      if (child.tagName.toLowerCase() === "img") {
        result.push(`\n\n![SkillUpp Image](${child.src})\n\n`);
      } else if (
        child.tagName.toLowerCase() !== "svg" &&
        child.tagName.toLowerCase() !== "path" &&
        child?.className === "katex-display"
      ) {
        result.push(...["$$", ...extractContent(child), "$$"]);
      } else if (
        child.tagName.toLowerCase() !== "svg" &&
        child.tagName.toLowerCase() !== "path" &&
        child?.className === "katex"
      ) {
        result.push(...["$", ...extractContent(child), "$"]);
      } else {
        result.push(...extractContent(child)); // 递归遍历子节点
      }
    } else if (child.nodeType === Node.TEXT_NODE) {
      const text = child.textContent;
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
  questionClassName = ".css-9axr9m",
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
      element.getAttribute("aria-label").replace(" Stars", "")
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

  const defaultResultItem = {
    topicId: "topic-uuid",
    topicItemId: "topic-item-uuid",
    type: "", // 先弄完、然后根据type 设置值 分为 ERQ | SAQ
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
  console.log(
    titleList,
    questionList,
    calculatorList,
    difficultyList,
    difficultyLevelList
  );
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
