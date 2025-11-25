// Task:
// Transform this simple sorting algorithm into a unique sort, meaning that it should not return any duplicate 
// values in the sorted array.

const uniqSort = function(arr) {
    const breadcrumbs = {}
    let result = []

    for (let index = 0; index < arr.length; index++) {
        if(!breadcrumbs[arr[i]]) {
            result.push(arr[i])
            breadcrumbs[arr[i]] = true
        }        
    }
    return result.sort((a, b) => a - b)
}

uniqSort([4,2,2,3,2,2,2])