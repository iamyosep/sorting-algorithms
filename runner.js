import { getData } from './dataReader.js';
import { bubbleSort, bubbleSort2 } from './bubble-sort.js';

const data = getData();
console.log('Data: ', data);
console.log('Sorted data: ', bubbleSort(data));
console.log('Data: ', data);