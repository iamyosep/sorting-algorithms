import fs from 'fs';
import { generateFile } from './dataGenerator.js';

let dataFile = process.argv[2] || 'data/1000xintegers.txt';
if (!fs.existsSync(dataFile)) {
    generateFile(dataFile, () => {

    });
}