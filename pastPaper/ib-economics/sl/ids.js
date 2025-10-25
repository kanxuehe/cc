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
  '11180f49-a1ca-44c9-b453-bbe1ee0e490f',
  '4ee8d006-9d7c-43b7-ab8d-62a48729c02c',
  'e41d21de-417f-4bc9-a056-112f404ea489',
  '034b1614-552b-42d0-989a-d4b09eb793a7',
  'da8a8c20-3c6b-4748-a9b9-4d7795811ddc',
  'cd6500d2-b034-4778-b282-dc86aa6a3b8f',
  '65557133-5bb7-4497-b036-02d8e0471be6',
  '805f1c5e-c6a6-4f12-945e-34e0c8601f22',
  '7a05fc01-5340-4dc6-8654-579d74611ad6',
  '6d2ba549-2d77-40b8-b864-649062e5f997',
  '558d4ae5-5e17-4708-81c0-5f07f738f68e',
  '5404c1c5-bc32-4f9b-868f-19f0385c3eab',
  '759afea4-dd31-47e1-bf2f-54eaad4e2fd5',
  'fd0fc873-d7b6-4281-9a45-1722ca70fbd8',
  '3fca47e8-1051-44db-8d92-4ada9342ca66',
  '587138e5-cc09-410d-8c1d-0f3c05fecc8b',
  'f3e8b86f-6032-41e4-ab9c-e9801779f5f9',
  'b1a18808-0ad1-4d0f-8bdb-4b1d7145c624',
  '8fcfc78b-a964-41b9-89a6-6c655ee7189e',
  '97a45685-9e14-4a22-9025-e928e75ea685'
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
