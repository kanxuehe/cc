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
  '863d9c45-4b2e-4dab-9d5c-8ea0312b84d1',
  'f1f47fc0-3b82-441e-aed5-bc698f1085ed',
  'c1adbf45-a8da-4cef-ab48-ee3b2bb05875',
  '88e9ea2b-f50f-44fb-ae00-8408d81406ed',
  'd117af49-7e34-428c-b7cb-0229fa77820c',
  '6327e88e-2eb7-4ab5-ad6b-876b4bc77a73',
  '4797ba34-fb46-4d9e-841a-3485d34eb4e4',
  '7c00a611-fc38-4533-9ac0-68c970d5153b',
  'a1b6994c-9012-4067-b0ce-3217867ba026',
  '411f3085-4102-4799-9611-1c1cd5f8f73d',
  'a12d30c8-d9c0-4a62-8c27-aedcbd843b39',
  '20417697-40c7-4517-9f25-2a50218a1629',
  'ebe6991e-043a-4c73-846d-dc972c217a57',
  '5c28011b-9529-4b8b-b86f-2c0194ba2da3',
  '1a8a092b-8816-4f15-856a-1bd2113cac70',
  'cbd2b2eb-5fcf-40a9-8944-19c6403a4baf',
  'c8d4116b-898a-4c28-9c5a-53c2f48ca749',
  'd87da338-cf4f-4b01-a8a0-8b5b970e3d08',
  'b0b6acf0-28c2-4a92-9bc2-e3f3b6b5fcc4',
  'bf7485ac-c53c-49b6-9b3d-ee1f14a06588'
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
