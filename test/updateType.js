// update-json.js

// const indexArr = [...document.querySelectorAll(".css-r0xajv")].map((item) => {
//   const result = item.textContent.replace("Question ", "");
//   console.log(result);
//   return result;
// });
import fs from "fs";
const filePath = "./Theme A All.json"; // 文件路径
const indexArr = [
  "155",
  "193",
  "203",
  "204",
  "223",
  "238",
  "240",
  "252",
  "255",
  "256",
  "260",
  "271",
  "276",
  "278",
  "280",
  "292",
  "295",
  "296",
  "297",
  "298",
  "316",
  "323",
  "324",
  "325",
  "328",
  "329",
  "331",
  "345",
  "353",
  "355",
]; // 从页面获取
const type = "ERQ";












// 1. 读取文件内容
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

// 2. 修改字段
indexArr.forEach((item) => {
  data.list[item - 1].type = type;
});

// 3. 写回文件（格式化缩进 2 个空格）
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

console.log("✅ JSON 文件已更新！");
