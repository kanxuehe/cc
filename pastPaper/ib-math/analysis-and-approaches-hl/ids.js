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
  'ff14675d-4107-44f1-bd8a-f3cefdcd8343',
  '5e72a978-aca3-422b-b92e-070ef314633e',
  '8f9394f0-002c-4718-9caf-8a9d2bf4053d',
  '29d36f8e-14fb-40c8-97b2-780fcfe7f9ee',
  'b26b1419-afd3-4a7f-a2fd-44c5a63aec05',
  'dd21d2b5-c01b-4ec3-91a6-867bdc947ddf',
  'ffa885c9-7ae0-4605-a8ee-75a68b1dfe46',
  'b0e5be40-ef2b-4a33-976a-b17942e29543',
  'cbbbd01e-8b6b-4e7e-ae94-63465f27527a',
  '5a974aeb-3bc8-4eb9-83d4-4d8ad919170c',
  '2c6c6bc2-384c-4d50-83c1-770618c2be4c',
  '4abd17a4-9b23-44ac-b521-00ee7125fe9e',
  'b6c73890-3c23-4e3d-be68-353d8c90e62b',
  '45e8d035-623c-41ef-87a0-bf0fd9d81808',
  '047453dd-ff69-450e-bb4e-3745a2e07ce8',
  'd4404cfd-6451-41dc-b556-3254396fdce3',
  'e7cbbc40-3b22-4917-9de2-5f44ee211f92',
  'dea23119-7142-4e43-ac26-eff430b88d7c',
  'f3c140ac-342e-4567-ae73-a4260ee33efd',
  '277b9b83-0697-4f6a-b9ab-b7bb3c23fe76',
  '4333e5e4-9984-4346-8984-17bbc6510a1b',
  'ecd2f3be-c15d-4fa3-ab68-2bf02a9d0079',
  '5b747f48-c35c-4204-ba12-94b4e5977529',
  '3d8172c6-acaa-4132-9339-290b6b4864d8',
  '18b20d3d-0178-4a58-833b-470c7c279a52',
  '7bbec695-dd2b-4727-a0e9-89c6cad0e27b',
  'f413deeb-b427-4285-ad10-9ece8d566981'
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
