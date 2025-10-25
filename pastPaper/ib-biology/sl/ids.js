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
  '79d2cfd9-bc60-47c3-8fd6-53567167e01a',
  'b095b407-9d7b-408f-8392-3b5436fab0cb',
  '5227bd5e-f660-4221-8dd3-f645399ffdaf',
  '16be1ee9-9741-455a-beab-a90aeb5a224e',
  '8072f3ab-a546-408c-bccd-a8515096e5d6',
  '6027f8a4-5db4-4b3b-8c27-150524fe48ad',
  '28babee0-af2c-4b71-83c7-aa91ad2a0f9f',
  'a429bee0-e596-4b2d-9021-0419e5e8f4f0',
  '8ba57b71-f861-41e7-b1e9-5ce68171049a',
  'd6118d77-71f4-4e1c-8097-21c0731de85b',
  '9d1de5c8-66ae-4319-90e1-163f309fdde5',
  '14cc2297-7356-4978-b494-fb1f875ab776',
  '31d4ad52-f804-45e7-96a8-3362b7eb3b55',
  '3be5785f-98b8-4062-9459-7ece2d523ff9',
  'd931a423-6dc6-441d-bf83-07bcb38cdf94',
  '8af41f8f-d964-4203-9cce-1e1ab2452fba',
  '2e2a8df6-4c1e-4001-8615-520be7310fc3',
  'c4c021ba-bbf5-4963-84fa-d84985d1f2ec',
  'f42ee84c-98ff-4dc1-822b-06237c44c8d1',
  'e34ea8f7-3edb-423d-b17c-e55453ac1043',
  '52536f0d-5f62-404f-a2c4-734097040155',
  '65bdf142-ba53-471f-8257-e8562f1b987a',
  '5423caec-d2b2-4f72-8003-72765780f6de',
  'cdd2d2b1-40ec-4507-a090-03f295a3b00e',
  '17ece17c-8bc0-441e-8867-3012cfe22883',
  '5a82f628-e477-469c-8beb-1af96fccbec5',
  'e8e8ef62-4df8-47e8-8e1f-69d3418402c0',
  'de1db14b-4fe7-4640-8c93-5867a0cbee52'
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
