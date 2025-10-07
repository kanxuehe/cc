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
const filePath = "./Topic 1 All.json"; // 文件路径
const newPath = "./Systems of Linear Equations.json"; // 新文件路径
const questionArr = [
  "The Burns, Gordons and Longstaff families make meal plans for their households. The table below shows the amount of carbohydrate, fat and protein, all measured in grams, consumed by the family over a single day. The table also shows the daily calories, measured in kcal, this equates to.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/350ffb2d-5f7c-4d42-9455-67a41e1ff452/images/8ca2d5dd-4221-43ed-b694-8407a3540349/1111a.JPG)\n\nLetxxx,yyyandzzzrepresent the amount of calories, in kcal, for111g of carbohydrate, fat and protein respectively.Write down a system of three linear equations in terms ofxxx,yyyandzzzthat represents the information in the table above.[2]Find the valuesxxx,yyyandzzz.[2]The Howe family also plans meals. The table below shows the amount of carbohydrates, fat and protein consumed by the family over a single day.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/350ffb2d-5f7c-4d42-9455-67a41e1ff452/images/a0f40aa2-3fd5-4e46-b963-a74843eb2043/1111b.JPG)\n\nCalculate the daily calories for the Howe family.[2]",
  "A toy rocket is fired, from a platform, vertically into the air, its height above the ground aftertttseconds is given bys(t)=at2+bt+cs(t) = at^2 + bt + cs(t)=at2+bt+c, wherea,b,c∈Ra,b,c \\in \\mathbb{R}a,b,c∈Rands(t)s(t)s(t)is measured in metres.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/bb0065fc-bc20-4898-a580-9d8d84f4cc81/images/26a3d948-9010-49f6-b623-7aac14c767bf/rocket.png)\n\nAfter222second, the rocket is28.328.328.3m above the ground; after444seconds,25.625.625.6m; after555seconds,14.714.714.7m.Write down a system of three linear equations in terms ofaaa,bbbandccc.Hence find the values ofaaa,bbbandccc.[3]Find the height, above the ground, of the platform.[1]Find the time it takes for the rocket to hit the ground.[2]",
  "An owl takes off from from a tree branch and flies higher into the sky. Its height above the ground aftertttseconds, wheret≥0t\\geq 0t≥0, is given bys(t)=at3+bt2+ct+ds(t) = at^3 + bt^2 + ct+ds(t)=at3+bt2+ct+d, wherea,b,c,d∈Ra,b,c,d \\in \\mathbb{R}a,b,c,d∈Rands(t)s(t)s(t)is measured in metres.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/f2f10540-8736-484c-b76e-293673a1a920/images/e10ba209-e2d4-4ca9-a89f-fc01ced21fb2/owl.png)\n\nInitially the owl is1212\\,12metres above the ground.Write down the value ofddd.[1]After111second, the owl is19.819.819.8m above the ground; after222seconds,34.534.534.5m; after444seconds,22.822.822.8m.Write down a system of three linear equations in terms ofaaa,bbbandccc.Hence find the values ofaaa,bbbandccc.[3]After some time the owl reaches a maximum height. At this time it spots some prey at ground level and then immediately swoops down to catch it.Find the maximum height of the owl above the ground as it spots the prey.Find the time it catches the prey.[2]",
  "The graph below shows the amount of moneyMMM(in thousands of dollars), in the account of a contractor,  wheretttis the time in months since he opened the account.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/be163de5-68b0-49ca-94db-b870708b6869/AI1015a.PNG)\n\nWrite down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the amount of money in the account.[1]The equation of the model can be expressed asM(t)=at3+bt2+ct+dM(t)=at^3+bt^2+ct+dM(t)=at3+bt2+ct+d, whereaaa,bbb,cccandd∈Rd \\in \\mathbb{R}d∈R. It is given that the graph of the model passes through the following points.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/17bf7bc4-74b6-43c8-9455-a3c62c7a5acb/images/5c93f523-f86a-4794-ac51-31c1c41cc134/AI1015b.PNG)\n\nState the value ofddd.Using the values in the table, write down three equations inaaa,bbb, andccc.By solving the system of equations from part (ii), find the values ofaaa,bbbandccc.[4]IfMMMhas a negative value, the contractor is in debt.Use the model from part (b) to find the number of months the contractor expects to be in debt. Give your answer to the nearest month.[3]",
  "Coral is a wildlife expert who tags  flying fish and records their movement using an electronic device.The tagging device tells her the height of a fish relative to the water level, at any given time.She knows that the fish swim mostly in the water, but occasionally theyfly(jump!) out of the water.The height is measured in metres and the time in seconds. If the height is negative the fish is under the water, if the height is positive the fish isflying.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/99db50ab-81ea-421b-8f20-21b4669fedcd/images/70f02a92-7870-456a-abea-c262c3ce2d2b/seagull.png)\n\nCoral notices one particular fish as it flies out of the water. The moment it re-enters the water the device begins tracking its height.At222seconds the fish is at a height of−2.8-2.8\\,−2.8m; at555seconds the fish is at a height of−2-2\\,−2m and at111111seconds the fish is also at a height of−2-2\\,−2m.The height of the fish can be expressed asH(t)=at3+bt2+ct+dH(t)=at^3+bt^2+ct+dH(t)=at3+bt2+ct+d, whereaaa,bbb,cccandd∈Rd \\in \\mathbb{R}d∈R.Write down the value ofddd.Using the information given write down three equations involvingaaa,bbbandccc.Solve the system of equations to find the values ofaaa,bbbandccc.[4]From previous research, Coral knows that if a fish isflyingfor more than111second then a seagull will attempt to catch it.Use a justification to explain why a seagull will attempt to catch this fish.[4]Att=9t=9\\,t=9s a seagull begins swooping down to catch the fish.Its height is given byb(t)=−1.5t2+27t−118b(t)=-1.5t^2+27t-118b(t)=−1.5t2+27t−118.Find the height at which the bird catches the fish.Interpret the answer in the context of the problem.[4]",
  "Consider the quadratic functionf(x)=ax2+bx+cf(x) = ax^2+bx+cf(x)=ax2+bx+c. The graph ofy=f(x)y=f(x)y=f(x)is shown in the diagram below. The vertex of the graph has\ncoordinatesR(m,−9)\\text{R}(m,-9)R(m,−9).The graph intersects thexxx-axis at two points;P(−4,0)\\text{P}(-4,0)P(−4,0)andQ(2,0)\\text{Q}(2,0)Q(2,0).\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/b09e52c7-02f5-45a2-96f9-ab7aa4138a3b/images/a78c2481-ec6d-41fe-99c5-6ab402d1c48c/b188999a18650c4961f7def85ea1bfd8a1276fc9.svg)\n\nFind the value ofmmm.[1]Find the values ofaaa,bbb, andccc.[5]Write down the equation of the axis of symmetry of the graph.[1]",
  "The graph below shows the profitPPP(in thousands of dollars), that business A makes,  wheretttis the time in months since January 1st.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/c66ce31d-cb54-4bbd-848a-ef2cd4a05037/ai1106e.PNG)\n\nWrite down one characteristic of the graph which suggests that a cubic function might be an appropriate model for the business profit.[1]The model can be expressed asP(t)=at3+bt2+ct+dP(t)=at^3+bt^2+ct+dP(t)=at3+bt2+ct+d, whereaaa,bbb,cccandd∈Rd \\in \\mathbb{R}d∈R. It is given that the graph of the model passes through the following points.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/d91ed14d-8746-4221-9d13-3870a93ffff5/images/ef93a216-cfb9-450f-a315-71dbbb9af371/ai1106b.PNG)\n\nState the value ofddd.Using the values in the table, write down three equations inaaa,bbb, andccc.By solving the system of equations from part (ii), find the values ofaaa,bbbandccc.[4]IfPPPhas a negative value, business A is losing money. The owner has decided they will not open during the corresponding time next year.Use the model from part (b) to find the approximate dates during which business A will not open next year.[4]Business B has a profit function given byP(t)=−0.1t2+1.2tP(t)=-0.1t^2+1.2tP(t)=−0.1t2+1.2t, for0≤t≤120 \\leq t \\leq 120≤t≤12.Determine the total amount of time for which business B is more profitable than business A.[3]",
  "The Burj Khalifa, located in Dubai, is the tallest building in the\nworld. It has a height of830m830 \\text{ m}830mand has a square base that\ncovers a floor area of556m×556m556 \\text{ m} \\times 556 \\text{ m}556m×556m. A tourism\nshop located near the building sells souvenirs of the tower, which sit\ninside glass pyramids, as illustrated by the diagram below. The souvenir\ntower is an accurate scale replica of the actual tower.\n\n![SkillUpp Image](https://assets.revisionvillage.com/public/question/dd6dcb9f-6f6a-4d52-86ef-4383fc6f3f51/images/490aa73b-d0b9-484e-9cf9-6362beb9193f/75dbfe1df45464ae26235a84b47e84fedd3f43ea.svg)\n\nThe scaled model of Burj Khalifa has a base area of20cm×20cm20 \\text{ cm} \\times 20 \\text{ cm}20cm×20cm. The height and base area\ndimensions of the glass pyramid are 10% larger than the model.Find the height of the souvenir tower, in cm, correct to the\nnearest mm.Find the volume of the glass pyramid, rounding your answer\ncorrect to the nearest cubic centimetre.[5]The shop owner aims to maximise profits from selling the souvenirs. The\nmore the owner orders from the manufacturer, the cheaper the souvenirs\nare to buy. However, if too many are ordered, profits may decrease due\nto surplus stock unsold.The number of souvenirs ordered from previous years and the resulting\nprofits are shown in the following table.QuantityProfit($)5000500050003500035\\,000350001000010\\,000100009550095\\,500955001300013\\,00013000116500116\\,500116500The shop owner decides to fit a cubic model of the formP(x)=ax3+bx2+cx+dP(x) = ax^3+bx^2+cx+dP(x)=ax3+bx2+cx+dto model the profit,PPP, forxxxthousand\nsouvenirs ordered.Explain whyd=0d=0d=0.[1]Construct three linear equations to solve foraaa,bbbandccc, and\nhence write down the completed functionP(x)P(x)P(x).[5]FindP′(x)P'(x)P′(x).[2]Find, to the nearest hundred souvenirs, the optimal number of\nsouvenirs the owner should buy to maximise profit, and the resulting\nprofit from this number.[4]"
]; // 从页面获取

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
