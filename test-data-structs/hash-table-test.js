import { HashTable } from '../js-data-structs/hash-table.js';

const map = new HashTable();
let strArr = [
  'paintings',
  'anacondas',
  'voodooing',
  'postdated',
  'disgorged',
  'rereading',
  'colorless',
  'extincted',
  'parquetry',
  'furbished',
];
for (let i = 0; i < 9; i++) {
  map.add(strArr[i], strArr[0][i]);
}
map.add(263456, 'delete me');
console.log(map.get(263456));
map.delete(263456);
console.log(map);
console.log(map.has('rereading'));
map.clear();
console.log(map);
