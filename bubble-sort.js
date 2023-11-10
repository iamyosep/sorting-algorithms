import fs, { read } from 'fs';
import { generateFile } from './dataGenerator.js';

let dataFile = process.argv[2] || 'data/1000xintegers.txt';

const bubbleSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp; 
            }
        }
    }

    return arr;
}

const readFile = () => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file: ", err);
            return;
        }

        let dataArr = data.split(',').map(Number);
        console.time('bubbleSort');
        for (let i = 0; i < 1000; i++) {
            bubbleSort(dataArr);
        }
        console.timeEnd('bubbleSort');
    });
}



if (!fs.existsSync(dataFile)) {
    generateFile(dataFile);
    readFile();
} else {
    readFile();
}