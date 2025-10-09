// update-json.js

// const indexArr = [...document.querySelectorAll(".css-r0xajv")].map((item) => {
//   const result = item.textContent.replace("Question ", "");
//   return result;
// });
// console.log(indexArr)
import fs from 'fs';
const filePath = 'Topic 1 All.json'; // 文件路径
const indexArr = [
  "57",
  "59",
  "60",
  "64",
  "69",
  "72",
  "75",
  "76",
  "77",
  "78",
  "80",
  "87",
  "92",
  "94",
  "95",
  "96",
  "97",
  "98",
  "101"
]; // 从页面获取
const type = 'ERQ';

// 1. 读取文件内容
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 2. 修改字段
indexArr.forEach((item) => {
  data.list[item - 1].type = type;
});

// 3. 写回文件（格式化缩进 2 个空格）
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

console.log('✅ JSON 文件已更新！');
