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
  "fc7c6617-f300-43fe-a012-cd75935be86a",
  "bc768a68-1819-47a3-b27f-a0cea1c976c9",
  "7239b8ce-5cbe-4104-b308-9b0ea363625d",
  "568feefb-e20d-4930-8c29-8321d214315c",
  "e69b2e6d-6b58-4545-ab32-18a236cbe3ac",
  "a4c19a5f-35fa-4ad8-aff6-a7d6c64033fb",
  "fb57c757-1ca5-4668-aab9-b2beb46e02f7",
  "3732a432-aaa0-49dc-a2c1-9d1850513c25",
  "637b16c3-af55-456c-beb3-9848a3a4e176",
  "0dc8e09b-0dd6-4c64-a70e-ac575cd35c69",
  "6a0ec468-796a-4ebe-81a3-548bb7864b3e",
  "1a6cd029-4fcd-477c-b295-a6711c0d0bd0",
  "fc2e8a8c-7b55-4678-b1bf-569569f28b2e",
  "b75f8e49-b3b6-4f94-99de-73978ea3b9e7",
  "681c0b5b-edec-4e2a-a6c8-d8259cf07c46",
  "323cd603-0d3f-4f66-8233-f064bf274736",
  "e9e86f66-6ce5-4ebb-bfaa-d71723fbc3d8",
  "33cf7b95-1ba2-495e-817a-85e14ee146b3",
  "d9231506-cdec-45ef-838b-1eae074e7c6e",
  "3abaaca0-dfe8-4f16-a3cf-158d0fb3f651",
  "a3fe41f7-be17-4ca6-a1b6-4f80db5e2fec",
  "55d3e83e-15d7-4838-9545-63f40d2b280d"
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
  for (let i = 0; i < 4; i++) {
    let index = getRandomInt(length - 1, data);
    data[index].paperId = paperId;
    const selectionA = data.filter(
      (item) => item.paperId === paperId && item.selection === 'Selection A'
    );
    if (selectionA.length <= 2) {
      data[index].selection = 'Selection A';
    } else {
      data[index].selection = 'Selection B';
    }
  }
});
const result = data.filter((item) => item.paperId);
const filepath = path.join('./', 'list.json');
fs.writeFileSync(filepath, JSON.stringify(result, null, 2), 'utf8');
