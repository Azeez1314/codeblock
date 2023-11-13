/** Task:
Given an array and a size, split the array items into a list of arrays of the given size.

Answer:
*/

const chunk = (array, size) => {
    const chunks = [];

    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }

    return chunks;
  };



console.log(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
console.log(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
console.log(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);




