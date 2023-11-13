# Sorting Algorithms

This repository was created for a university project. Its mere purpose is to demonstrate the implementation of different sorting algorithms in JavaScript and look at their performance relative to each other.

This repository contains the implementation of the following sorting algorithms:
- [x] Bubble Sort - `bubble-sort.js`
- [x] Selection Sort - `selection-sort.js`
- [x] Insertion Sort - `insertion-sort.js`
- [ ] Merge Sort
- [ ] Quick Sort


## How to run the code

1. Prepare your environment
    - Install [Node.js](https://nodejs.org/en/)
    - Install [Git](https://git-scm.com/downloads)
2. Clone this repository
    - Clone this repository to your local machine using `git clone`
3. Run the code
    - Open a terminal in the root directory of this repository
    - Run the `runner.js` file using `node runner.js <file> <sort> <repitions>`


## How it works
The `runner.js` file is the entry point of this repository. It takes three arguments:
- `file` - The file containing the array to be sorted
- `sort` - The sorting algorithm to be used
- `repetitions` - The number of times the sorting algorithm should be executed

Files are read using `dataReader.js`. The parsed data is then passed to the sorting algorithm. The sorting algorithm is executed `repetitions` times and the execution time is measured. The execution time is then printed to the console.
If the provided file does not exist, `runner.js` will simply delegate the creation of a new file to `dataGenerator.js` with the provided name and fill it with random numbers.

Algorithms are implemented in their own files. Each file exports a function that takes an array as an argument and returns the sorted array. The function is then imported in `runner.js` and executed.

```js
const sort = array => {
    // Sort the array
    return array;
}

export { sort };
```