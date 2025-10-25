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
  'a0676a64-f64d-4276-8ace-942e2b285d54',
  'b8d2ab9f-194a-43a0-ba1f-3bb7df827ca3',
  '9238b358-4a6b-40c1-9716-0cba70b1b491',
  '817e6b50-9e48-4260-b2e3-ad9cf34051db',
  'd894d601-4d09-4074-b722-4dd5b429a5e0',
  '0e80b75f-4323-4037-9bd1-ce34a57d122a',
  '1cf9c6f8-8304-4080-96fc-cc08821baa90',
  'd9a73b4e-407b-42ce-8e8a-39488c1f856d',
  '0a741459-1c8b-45e7-b186-cb704bfa4ecb',
  'cc69fa6e-d360-4498-aab9-a25250fc83fb',
  '025b66e7-627b-43ef-a379-b3e1918881e6',
  'd981c866-e359-4a72-98af-efcec3b22997',
  'd2ff7274-4c59-4654-9e03-1a7934e60815',
  '3fae3401-6d07-427a-bdfc-6b92606a3478',
  'fc2d8978-5494-489e-ba34-1f811cc37750',
  '49aef0a2-a0a3-4715-9830-9ba140d0ed7b',
  'e56371b5-55cf-444a-b57a-f6f2c4cadec6',
  '696f807f-b500-4a82-9bad-08bbd527b794',
  'fbe39523-281d-4f75-aabf-1f9373293117',
  '008049fb-aede-43f5-8515-6b140c6f6838',
  '190cc1bf-15e1-4de7-90d1-16b0f4680049',
  '0844edd7-e2b5-4ed8-88f0-76392ae9cb43'
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
