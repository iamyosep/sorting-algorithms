const AMOUNT_OF_DATA = 1000;
let data;

const generateInteger = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);
const generateFloat = (min = 1, max = 100) => Math.random() * (max - min) + min;

const generateData = (amout = AMOUNT_OF_DATA, numberGenerator = generateInteger) => Array.from({ length: AMOUNT_OF_DATA }, () => numberGenerator());

console.table(generateData())