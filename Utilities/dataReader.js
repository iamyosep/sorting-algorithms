import fs from 'fs';
import { generateFile } from './dataGenerator.js';

const convertTextToNumberArray = (data) => data.split(',').map((Number));
const readFile = (dataFile) => convertTextToNumberArray(fs.readFileSync(dataFile, 'utf8'));

const checkDirectory = () => {
    const dataDir = './data';
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
}

const checkFile = () => {
    const dataFile = process.argv[2] || '1000xintegers.txt';
    if (!fs.existsSync(dataFile)) generateFile(dataFile);
    return dataFile;
}

const getData = () => {
    checkDirectory();
    let dataFile = checkFile();
    
    return readFile(dataFile);
}

export { getData };