import { getData } from './dataReader.js';
import { bubbleSort } from './bubble-sort.js';

const data = getData();
console.log('Data: ', data);
console.log('Sorted data: ', bubbleSort(data));