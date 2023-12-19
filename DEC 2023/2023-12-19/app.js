/** Task:
Interview Question:

"Implement the counting sort algorithm in your preferred programming language. Provide a clear and concise solution, and discuss the time and space complexity of your implementation. Explain the key steps of the counting sort algorithm and the reasoning behind your code. Additionally, consider scenarios where merge sort might be a suitable or unsuitable choice for sorting data and discuss potential use cases for this algorithm in real-world applications."

This question would prompt the candidate to demonstrate their understanding of the merge sort algorithm, its implementation, time and space complexity analysis, and practical considerations for its use. The candidate may also be asked to provide an example of using the merge sort algorithm in solving a particular problem or sorting a dataset.

Answer:
*/

const countingSort = (array, max) => {
    const counts = new Array(max + 1);
    counts.fill(0);
    array.forEach(value => counts[value]++);
  
    const result = [];
    let resultIndex = 0;
  
    counts.forEach((count, index) => {
      for (let i = 0; i < count; i++) {
        result[resultIndex] = index;
        resultIndex++;
      }
    });
  
    return result;
  };
  
  // Example usage and testing
  console.log(countingSort([4, 3, 2, 1, 0], 4)); // Expected: [0, 1, 2, 3, 4]
  console.log(countingSort([4, 3, 1, 2, 3], 4)); // Expected: [1, 2, 3, 3, 4]
  console.log(countingSort([4, 3, 2, 1, 0], 5)); // Expected: [0, 1, 2, 3, 4]