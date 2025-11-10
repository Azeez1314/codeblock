/** Task:
Interview Question:

"Implement the insertion sort algorithm in your preferred programming language. Provide a clear and concise solution, and discuss the time and space complexity of your implementation. Explain the key steps of the insertion sort algorithm and the reasoning behind your code. Additionally, consider scenarios where insertion sort might be a suitable or unsuitable choice for sorting data and discuss potential use cases for this algorithm in real-world applications."

Answer:
*/

const insertionSort = array => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) array.splice(j, 0, array.splice(i, 1)[0]);
      }
    }
    return array;
  };
  
  // Example usage
  console.log(insertionSort([4, 3, 3, 2, 1])); // Output: [1, 2, 3, 3, 4]
  console.log(insertionSort([4, 3, 1, 2, 3])); // Output: [1, 2, 3, 3, 4]