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
  "d3a61f61-d249-4339-bede-d1bf29ecd6ab",
  "63e9b5aa-42fb-4c23-91ec-a2c0c6c38eee",
  "f304f974-51fb-421e-adf2-c99095b8710a",
  "deec5464-35d1-4963-b013-94ecdebb68c6",
  "1364e983-190c-4290-b420-e17f04c28ab0",
  "3afcbe0f-49e6-4420-a24e-97c4c3566c65",
  "6889b3e6-0cde-4e2e-85ac-a5ddb4d17ef9",
  "b6a40acc-db87-4234-9db8-3bd91f451e32",
  "469bb9f4-bd17-4196-9b03-2c63b2ee05cb",
  "f7bcd7f4-2ca2-46bf-9497-08ccf01d489e",
  "e86c89da-7c59-4503-8d68-3e68531ce73e",
  "a5266046-31f3-4b67-9bbf-f3ea576567b5",
  "c260a6b1-f847-4970-9027-b89fcd4177e7",
  "68ea8658-1f0e-47c6-91fb-60eba59e3e81",
  "1366882f-bbb7-4295-8083-29d1ae2df606",
  "4d7d9ba9-3d15-4421-bce5-a34f873077d5",
  "8760e035-62ab-4e55-9718-3d5bf9a6cf87",
  "e1c192a5-baa8-48ea-8603-1a29ec960810",
  "4f35d1a4-d19e-418d-903b-243573963d1c",
  "83f5327b-0789-403e-a11a-8720b86dc459"
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
