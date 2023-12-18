/** Task:
"Implement the merge sort algorithm in your preferred programming language. Provide a clear and concise solution, and discuss the time and space complexity of your implementation. Explain the key steps of the merge sort algorithm and the reasoning behind your code. Additionally, consider scenarios where merge sort might be a suitable or unsuitable choice for sorting data and discuss potential use cases for this algorithm in real-world applications."

Answer:
*/

const mergeSort = array => {
    if (array.length < 2) return array;
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle),
      right = array.slice(middle, array.length);
  
    return merge(mergeSort(left), mergeSort(right));
  };
  
  const merge = (left, right) => {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
  
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
  
    return result;
  };
  
  function _mergeSort(array) {
    if (array.length === 1) return array;
  
    const center = Math.floor(array.length / 2);
    const left = array.slice(0, center);
    const right = array.slice(center);
  
    return _merge(_mergeSort(left), _mergeSort(right));
  }
  
  function _merge(left, right) {
    const results = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) results.push(left.shift());
      else results.push(right.shift());
    }
  
    return [...results, ...left, ...right];
  }
  
  // Example usage
  console.log(mergeSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
  console.log(mergeSort([5, 3, 1, 2, 4])); // Output: [1, 2, 3, 4, 5]
  console.log(_mergeSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
  console.log(_mergeSort([5, 3, 1, 2, 4])); // Output: [1, 2, 3, 4, 5]