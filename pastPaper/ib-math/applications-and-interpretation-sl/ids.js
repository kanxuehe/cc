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
  '275450fc-3de3-46e3-9c30-4428699e5780',
  '0c66870c-7e12-4af3-8fb0-fc7a956b018b',
  'b4c5406a-518f-4676-8273-17ed9eb0abac',
  'c80ba708-c73a-48e8-8f64-8fa606eef03b',
  'b09801a2-6a79-4ff2-8960-f6d06be3841e',
  '8841428e-1797-4f9b-b235-c2f86d841928',
  '92af62cc-351c-4376-b6de-65c5baae172f',
  '5269e7d8-f778-491d-b797-80caa5e6abc6',
  '19b97d03-3043-4625-b635-b751c13f982c',
  'fd22b48c-92e3-45ce-8cef-19d27c2ba249',
  '05ea51af-a42d-4c58-956b-778da8329666',
  'bfa9c244-49e0-4d68-8b38-64910705c7c3',
  '6b17a156-def1-49a7-a5c6-d55294a364e2',
  'f042c591-a945-4948-805c-9a59ce00be7f',
  'ee71f11d-6149-4bb7-bb8a-388408b819e8',
  'b461a656-49fe-4cb8-b3df-fd979569eb77',
  '8b1667f9-f487-4815-b584-91675ebd4a2c',
  '2926804f-8a08-498f-8b96-7488e74ce4e2',
  '6bb8eab3-5bc2-461a-88fd-27ed675c89c7',
  'b20d8e83-516f-4569-a167-1c8e21f229d3',
  'd918f84e-5a05-4838-9d21-d154c528c863',
  'd6fb22f5-2021-4c87-bd44-72fbf27c87c7'
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
  for (let i = 0; i < 6; i++) {
    let index = getRandomInt(length - 1, data);
    data[index].paperId = paperId;
    const selectionA = data.filter(
      (item) => item.paperId === paperId && item.selection === 'Selection A'
    );
    if (selectionA.length <= 3) {
      data[index].selection = 'Selection A';
    } else {
      data[index].selection = 'Selection B';
    }
  }
});
const result = data.filter((item) => item.paperId);
const filepath = path.join('./', 'list.json');
fs.writeFileSync(filepath, JSON.stringify(result, null, 2), 'utf8');
