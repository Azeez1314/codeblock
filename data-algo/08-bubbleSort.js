// Implement bubble sort
// sample of arrays to sort
let arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
let arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp;
}

// basic implementation
function bubbleSortBasic(array) {
    let countOuter = 0
    let countInner = 0
    let countSwap = 0

    for(let i = 0; i < array.length; i++) {
        countOuter++;
        for(let j = 1; j < array.length; j++) {
            countInner++
            if(array[j - 1] > array[j]) {
                countSwap++
                swap(array, j - 1, j)
            }
        }
    }
}






























