let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function bubbleSort(arr) {
    let n = arr.length;

    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing elements
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let sortedArray = bubbleSort(myArray);
console.log(sortedArray);  // Output: [5, 11, 12, 22, 25, 34, 64, 90]
