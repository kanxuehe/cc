import { allData } from './allData.js';
import fs from 'fs';
import path from 'path';

// const list = []
// const result = [];
// list.map((item) => {
//   const ids = item.papers.map((paper) => paper.id);
//   result.push(...ids);
// });

const paperIds = [
  "d19ac220-c3f3-4c34-ad7e-eb26318b5982",
  "93f57a25-a2ab-42cb-a978-6cbbc2c80c4c",
  "a4addb82-1439-4e0c-9bb5-225703ba8921",
  "3af49720-43f9-42e8-a7d4-6517ce037cb4",
  "95af942b-512a-4a3e-977f-7f31cf0f27a9",
  "8e12bf71-f758-4524-9946-f3b111fbece3",
  "9a72b14d-96eb-4942-8b8d-0df2a1c81107",
  "f05a424f-6f11-425f-a7cf-4eeab1203b5f",
  "e7399d98-755e-4f33-b6c8-47c7006610c1",
  "6db8fbb0-2688-4245-b8b0-34784c3bcbb7",
  "b6377594-0473-4577-bdb5-2416a4c75e74",
  "37a69a8d-fe20-46bb-9af7-8df81338537e",
  "4911db66-631c-4fc8-b474-9eadfa4c79cd",
  "252cb032-eef6-4baf-ac72-782f2f941603",
  "03252119-95ce-4ac2-85c2-ac41297ebe97",
  "547bceef-da5e-4005-ab5e-01ec7d7d8f56",
  "a64b57ab-d0c8-42ec-8ed4-1b33dd2c0e67",
  "91174940-c850-40c5-8439-ef099876acbe",
  "0b23c9bf-b112-4a09-95cc-086f87238ab3",
  "26171378-9798-44e3-b979-e6fb3d92678a"
]

const data = allData;
const length = data.length;
function getRandomInt(x, data) {
  const index = Math.floor(Math.random() * (x + 1));
  if (data[index].paperId) {
    return getRandomInt(x, data);
  }
  return index;
}
paperIds.forEach((paperId) => {
  for (let i = 0; i < 2; i++) {
    let index = getRandomInt(length - 1, data);
    data[index].paperId = paperId;
    const selectionA = data.filter(
      (item) => item.paperId === paperId && item.selection === 'Selection A'
    );
    if (selectionA.length <= 1) {
      data[index].selection = 'Selection A';
    } else {
      data[index].selection = 'Selection B';
    }
  }
});
const result = data.filter((item) => item.paperId);
const filepath = path.join('./', 'list.json');
fs.writeFileSync(filepath, JSON.stringify(result, null, 2), 'utf8');
