import fs from 'fs';

const AMOUNT_OF_DATA = 1000;

const generateInteger = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);
const generateFloat = (min = 1, max = 100) => Math.random() * (max - min) + min;

const generateData = (amout = AMOUNT_OF_DATA, numberGenerator = generateInteger) => Array.from({ length: AMOUNT_OF_DATA }, () => numberGenerator());
const generateFile = () => {
    let data = generateData();
    let dataNumbersType = Number.isInteger(data[0]) === true ? 'integers' : 'floats';
    fs.writeFile(`data/${data.length}x${dataNumbersType}.txt`, 
        data.toString(), 
        (err) => {
            if (err) throw err;
            console.log("File created");
    });
}

generateFile();