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
  'f0b34ec6-57a0-412b-8ef0-48f902ca51ba',
  'a9b24ef1-94ee-48b9-acf9-c9fbb230ebbc',
  '63110e7b-507e-4acf-b706-e580ab66f122',
  'e7b9a5a9-dabf-4e82-a557-d5850a17e13c',
  '7816e3a4-7940-4951-8458-9ed3fe2b8f2c',
  '311d8c9b-7b2c-4d51-b368-b745bc3e50e8',
  '67ec4337-1165-40e1-a52b-2a4761056bf6',
  'e73c6927-cfc4-4a1d-81b4-1e2dc44151de',
  '85332b74-e292-4458-85aa-5262c4d8fff5',
  '0366a1db-46ee-4e8c-b75d-47907eeb75b0',
  '0d6314fe-3efd-420f-a247-6d9f56bedee5',
  '74ffb4aa-73b2-471b-be5c-62cf8a564e91',
  '0f3d1886-099f-4428-8f4e-e60642372085',
  '39112504-f719-44b4-9959-d210d278be3a',
  'd966ef3d-9f01-427f-8320-68ec5c9d66c9',
  '15b37a71-38f1-4880-bd04-434c541ca012',
  '4e54444b-6e1a-46b2-918d-5e40a3a25b1c',
  '270b4744-3227-417f-b0f7-e6f40cb98e78',
  'e9e0a48d-5918-4f89-90bf-39cff05880de',
  '350ea602-25f9-49c7-b567-e1b594dc805f',
  'd0677fed-cb93-4c5f-838c-0a8c52035d1c',
  '75970c82-4dd5-4f31-83a2-f1a26cfa57f4',
  'a03aac3a-43d9-4944-b6c1-a215cf585fb6',
  '493b63ec-a0c6-4b46-9955-d36603a70cb7',
  'b8dd9a05-dbf6-42a4-aaee-a7b98c104d84',
  '0d4de3d4-282a-4033-9ec1-760680391c6a',
  'b7d83ad9-e8cd-4742-9a82-4b9c105e27e7'
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
