const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 2242;

app.use(bodyParser.json({ limit: "10mb" })); // 支持较大payload

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/save", (req, res) => {
  try {
    const { data, filePath, fileName } = req.body;
    const filename = `JSON/${filePath}/${fileName}.json`;
    const filepath = path.join(__dirname, filename);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), "utf8");
    console.log(`Saved ${filename}`);
    res.json({ ok: true, filename });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.get("/list", (req, res) => {
  const files = fs
    .readdirSync(__dirname)
    .filter((f) => f.startsWith("page-snapshot-") && f.endsWith(".json"));
  res.json(files);
});

app.post("/updateType", (req, res) => {
  try {
    const { type, indexArr, filePath, fileName } = req.body;
    const filename = `JSON/${filePath}/${fileName}.json`;
    const filepath = path.join(__dirname, filename);
    // 1. 读取文件内容
    const data = JSON.parse(fs.readFileSync(filepath, "utf8"));

    // 2. 修改字段
    indexArr.forEach((item) => {
      data.list[item - 1].type = type;
    });

    // 3. 写回文件（格式化缩进 2 个空格）
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), "utf8");

    console.log("✅ JSON 文件已更新！");
    res.json({ ok: true, filename });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Save server running at http://localhost:${PORT}`);
});
