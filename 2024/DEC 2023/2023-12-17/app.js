/** Task:
"Implement the quick sort algorithm in your preferred programming language. Provide a clear and concise solution, and discuss the time and space complexity of your implementation. Explain the key steps of the quick sort algorithm and the reasoning behind your code. Additionally, consider scenarios where selection sort might be a suitable or unsuitable choice for sorting data and discuss potential use cases for this algorithm in real-world applications."



Answer:
*/
// Quicksort implementation
function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage
  const unsortedArray = [4, 2, 7, 1, 9, 3];
  const sortedArray = quickSort(unsortedArray);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);
  