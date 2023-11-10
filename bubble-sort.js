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

const bubbleSort2 = (arr) => {
    let index = 1;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - index; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp; 
                swapped = true;
            }
        }
        
        index++;
    } while (swapped)

    return arr;
}

export { bubbleSort, bubbleSort2 };