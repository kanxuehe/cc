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
  'b79bc266-d46a-41f4-a6f6-cdbf8476a031',
  '44f4d45f-be16-4396-ad24-7971faeed797',
  'cd62bf7e-db5f-4231-bd02-9ae767916027',
  '5cb59f59-953b-41d0-8378-b8e1dbb586b5',
  '42fadde0-8ca1-4c97-b4ba-67ca943d8fb6',
  'e3f6cc9d-7bd0-4718-a26f-b8bf60276554',
  '32047a74-83d6-4a3e-a8f8-d8068c9a63f4',
  '67d16469-af2d-4d42-a830-849308f928a6',
  'fe3b816c-0620-4ff5-b95a-7c9aea3a020d',
  'd231d7d2-dd75-4af9-b8e8-af844e750027'
];

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
