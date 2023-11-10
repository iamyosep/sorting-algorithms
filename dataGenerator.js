import fs from 'fs';

const AMOUNT_OF_DATA = 1000;

const generateInteger = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);
const generateFloat = (min = 1, max = 100) => Math.random() * (max - min) + min;

const generateData = (amount = AMOUNT_OF_DATA, numberGenerator = generateInteger) => Array.from({ length: amount }, () => numberGenerator());
const generateFile = (fileName) => {
    let data = generateData();
    let dataNumbersType = Number.isInteger(data[0]) === true ? 'integers' : 'floats';
    let name = `data/${fileName}` ?? `data/${data.length}x${dataNumbersType}.txt`;
    fs.writeFileSync(name, 
        data.toString(), 
        (err) => {
            if (err) {
                console.log("Error creating file: ", err);
                return;
            }

            console.log("File created successfully");
    });
}

export { generateData, generateFile, generateInteger, generateFloat };