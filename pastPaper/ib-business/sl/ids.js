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
  'd948202f-e91c-419a-96fb-f4ad343bd375',
  'da071b71-ab26-440b-bc9b-b66253322959',
  '4562eae5-fc96-4448-9d1d-af2ba8f3c742',
  'ff0511ed-3fc4-4639-890b-f2f30c1af3df',
  'e854704a-4caa-4cb3-8e26-c6762ad39a60',
  '2712a3b9-03cd-4740-9f89-b6eac064e113',
  '4133ea77-20c0-44af-b432-b80ba66bbae9',
  'ed656051-ffce-468a-b2bc-004aa159d99a',
  '96989f0f-6faa-4e3e-b9b4-2519f88640cd',
  'f2d6cbd3-96b2-453e-aab6-73a70cc13abb',
  'c424bee7-205b-4d57-bae7-bb5e9ae8e8e9',
  '9248a552-a7c5-4e09-807f-f32d53d527e6',
  'ce4eb822-c5da-4bf1-a38d-65078b788931',
  '633fd347-4071-4e4b-a0ba-856e9d3afdab',
  '6871f7f5-b3d7-459c-91fc-0d4b6f8b5720',
  '037550b4-5fab-4edb-956a-c6d242b24e7c',
  'd41078f7-a08a-4601-b813-11905927fa28',
  'fbe69c1c-4c61-49e6-ae77-63cf6c749b4d',
  '69d56083-8ff5-4f14-a07b-19c276703690',
  'a1f2dced-0355-4fda-b9c5-fc578452e0c4'
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
