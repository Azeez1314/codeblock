/** Task:
Interview Question:

"Implement the bubble sort algorithm in your preferred programming language. Provide a clear and concise solution, and consider factors such as code efficiency, readability, and potential optimizations. Explain your reasoning behind the implementation choices you make. Additionally, discuss any potential scenarios where bubble sort might be a suitable or unsuitable choice for sorting data, and suggest alternative sorting algorithms for different use cases.""

Answer:
*/

const bubbleSort = array => {
    let swapped;
    do {
      swapped = false;
      array.forEach((number, index) => {
        if (number > array[index + 1]) {
          [array[index], array[index + 1]] = [array[index + 1], array[index]];
          swapped = true;
        }
      });
    } while (swapped);
    return array;
  };
  
  function _bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const less = array[j + 1];
          array[j + 1] = array[j];
          array[j] = less;
        }
      }
    }
  
    return array;
  }
  
  // Example usage
  console.log(bubbleSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
  console.log(bubbleSort([5, 3, 1, 2, 4])); // Output: [1, 2, 3, 4, 5]
  console.log(_bubbleSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
  console.log(_bubbleSort([5, 3, 1, 2, 4])); // Output: [1, 2, 3, 4, 5]
  