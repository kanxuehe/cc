// 提取问题,可能包含图片
// function getQuestionStr(className) {
//   const elements = document.querySelectorAll(className);
//   const result = Array.from(elements).map((element) => {
//     const question = extractContent(element);
//     const [maxMark, content] = getMaxMarkAndContent(question);
//     return content;
//   });
//   return result;
// }

// function getMaxMarkAndContent(str) {
//   // 1. 提取 [Maximum mark: 6] 里的数字
//   const markMatch = str.match(/\[Maximum mark:\s*(\d+)\]/);
//   const mark = markMatch ? markMatch[1] : null;

//   // 2. 提取后面的全部内容
//   const content = str.replace(/\[Maximum mark:\s*\d+\]\n?/, "");
//   return [mark, content];
// }

// function extractContent(node) {
//   let result = [];

//   node.childNodes.forEach((child) => {
//     if (child.nodeType === Node.ELEMENT_NODE) {
//       if (child.tagName.toLowerCase() === "img") {
//         result.push(`\n\n![SkillUpp Image](${child.src})\n\n`);
//       } else {
//         result.push(...extractContent(child)); // 递归遍历子节点
//       }
//     } else if (child.nodeType === Node.TEXT_NODE) {
//       const text = child.textContent.trim();
//       if (text) {
//         result.push(text);
//       }
//     }
//   });

//   return result.join("");
// }
// console.log(getQuestionStr(".css-9axr9m"));

import fs from "fs";
const filePath = "./Theme A All.json"; // 文件路径
const newPath = "./A1.1 - Water.json"; // 新文件路径
const questionArr = []; // 从页面获取

// 1. 读取文件内容
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

// 2. 修改字段

const group = [];
data.list.forEach((item) => {
  if (questionArr.includes(item.content)) {
    item.title = `Question ${group.length + 1}`;
    group.push(item);
  }
});

// 3. 写回文件（格式化缩进 2 个空格）
fs.writeFileSync(newPath, JSON.stringify({ list: group }, null, 2), "utf8");

console.log("✅ JSON 文件已更新！");
