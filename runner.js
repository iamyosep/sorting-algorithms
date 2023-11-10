import { performance } from 'perf_hooks';
import { getData } from './dataReader.js';
import { bubbleSort, bubbleSort2 } from './bubble-sort.js';

const data = getData();
console.log(
    "\x1b[33m%s\x1b[0m", 
`
Bubblesort to be performed on ${data.length} numbers.
The sorting will be performed 100 times and the average time will be calculated.
`
);

const runFunction = (data, sortingFunction, repetition) => {
    const start = performance.now();
    for (let i = 0; i < repetition; i++) {
        sortingFunction(data.slice());
    }
    const end = performance.now();

    return end - start;
}

let time = runFunction(data, bubbleSort, 100);
let time2 = runFunction(data, bubbleSort2, 100);

console.log("\x1b[31m%s\x1b[0m", "Bubblesort:");
console.log(`Total: ${time}ms
Avg: ${time / 100}ms`);

console.log("");

console.log("\x1b[31m%s\x1b[0m", "Bubblesort2:");
console.log(`Total: ${time2}ms
Avg: ${time2 / 100}ms`);

console.log("");