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
  "8f8d291c-e154-4ade-b63c-feca3969f028",
  "0a15e5c7-07fd-4094-ba44-5d04b174fe39",
  "ab7bc3fe-b29b-43b0-b444-1bef2ab6e9c3",
  "b622e6a1-fae2-4836-a662-2c39a8467cd3",
  "13a28e58-9766-452f-9536-5cc0a9c82395",
  "8e33b2a4-f306-4c9d-9f4b-800be8e41957",
  "562b47f5-32b5-4ba7-8672-16b1fe78430c",
  "fdb8cebb-97f5-49c4-b49d-d17dafd58dc8",
  "409feb44-42e5-4f8f-9930-b6c314f546df",
  "2913a30d-e60d-4b21-bffd-202095da6ffb"
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
