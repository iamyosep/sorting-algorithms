import { performance } from 'perf_hooks';
import { getData } from './dataReader.js';
import { bubbleSort, bubbleSort2 } from './bubble-sort.js';
import { insertionSort } from './insertion-sort.js';

const REQUIRED_ARGS = 5;
const ARGS = process.argv;

if (ARGS.length < REQUIRED_ARGS || ARGS.length > REQUIRED_ARGS) {
    console.log(`Please use the following format:
$ node runner.js <file> <sorting>`);
    process.exit(1);
}

const sortingFunctions = {
    bubble: {
        name: 'Bubble Sort',
        function: bubbleSort,
    },
    bubble2: {
        name: 'Alt. Bubble Sort',
        function: bubbleSort2,
    },
    insertion: {
        name: 'Insertion Sort',
        function: insertionSort,
    },
}

const information = {
    file: ARGS[2],
    sorting: sortingFunctions[ARGS[3]],
    repetition: ARGS[4],
}

const data = getData(information.file);

/* 
    Log the information about the file and sorting algorithm
    that will be used.
    If no arguments are passed, the default values will be used.
*/

console.log(
    "\x1b[33m%s\x1b[0m", 
`
${information.sorting.name} to be performed on ${information.file}.
The sorting will be performed ${information.repetition} times.
This may take a while...
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


let time = runFunction(data, information.sorting.function, information.repetition);

console.log("\x1b[31m%s\x1b[0m", `${information.sorting.name} - ${information.repetition} repetitions`);
console.log(`Total: ${time} ms
Avg: ${time / information.repetition} ms`);