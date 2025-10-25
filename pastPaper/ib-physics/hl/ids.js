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
  'ed02da4d-27d4-4840-a908-16d0a8012df8',
  '0fd4ab02-0d6f-4c95-a7ab-4adc840e8c70',
  '14bffd16-38a6-4b75-8d0b-9db204b2ae24',
  '21f37dfc-70a3-4e54-96b0-200a0a0b6b14',
  '1d7209f0-d0ce-44fa-ad62-e9bc5b70c775',
  '1ff7ccfc-6436-4dbc-a1fd-0c8d58c69995',
  'd4703009-2358-48e3-9146-7379c49cfdfe',
  'd3a9d4b0-03f7-4d6d-a5f3-e8904b2a0bad',
  'f875c4d5-c4b5-4b20-a929-152af48a5ad3',
  '1e5b18af-1bd3-4eff-8ea5-3cfcfbc1ce00',
  'b1ed61fc-4a59-4953-b84e-7e709be14dae',
  'ad162052-fe36-4073-adf0-216437b67815',
  'f9ae5e08-7ee9-4f23-a462-592e6070a763',
  '898c3f21-c600-46cb-a4e9-146e910c29f7',
  '13d1d653-ee30-44a4-accf-305738602c34',
  'c86e9dd6-feb1-44dc-9a68-0bdc8cddcaaa',
  'f1bd93cd-6579-40c4-bf4d-019d23a187df',
  '16c9303d-b6ab-401a-89d8-0b213277f190',
  '4a23d8ee-e443-43cb-9d6e-61c1bbd1e9ba',
  '7430da12-6adb-4bf6-8757-425a8056def6'
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
