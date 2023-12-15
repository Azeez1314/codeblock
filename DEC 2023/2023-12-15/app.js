/** Task:

"Implement the selection sort algorithm in your preferred programming language. Provide a clear and concise solution, and discuss the time and space complexity of your implementation. Explain the key steps of the selection sort algorithm and the reasoning behind your code. Additionally, consider scenarios where selection sort might be a suitable or unsuitable choice for sorting data and discuss potential use cases for this algorithm in real-world applications."

Answer:
*/

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let indexOfMin = i;
  
      for (let j = i + 1; j < array.length; j++)
        if (array[j] < array[indexOfMin]) indexOfMin = j;
  
      if (indexOfMin !== i) {
        let less = array[indexOfMin];
        array[indexOfMin] = array[i];
        array[i] = less;
      }
    }
  
    return array;
  }
  
  // Example usage
  console.log(selectionSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
  
  
  