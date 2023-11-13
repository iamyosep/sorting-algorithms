const selectionSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minimumIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimumIndex]) {
                minimumIndex = j;
            }
        }

        if (minimumIndex !== i) {
            let tmp = arr[i];
            arr[i] = arr[minimumIndex];
            arr[minimumIndex] = tmp;
        }
    }

    return arr;
}

export { selectionSort };