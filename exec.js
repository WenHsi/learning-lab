import * as Algo from './main/algo.js';
import * as myArray from './main/myArray.js';
import myHashTable from './main/myHashTable.js';

// try {
//     const exec = new Algo.MergeSortedArrays();
//     const input = [[-22, -3, 0, 4, 85] , [-1, 3, 6, 86, 204,898,9349]];
//     const version = 2;

//     exec.exec(version, ...input);
//     exec.test(...input);
// } catch (err) {
//     console.error(err);
// }


const hashTable = new myHashTable(50);
hashTable.set('apple', 10000);
hashTable.set('grape', 3500);
hashTable.set('orange', 500);
hashTable.set('banana', 339);

console.log(hashTable.get('apple'));
console.log(hashTable.get('grape'));
console.log(hashTable.get('orange'));
console.log(hashTable.get('banana'));
console.log(hashTable.keys());
