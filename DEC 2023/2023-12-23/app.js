/** Task:

Answer:
*/

const binarySearch = (array, value) => {
    const midIndex = Math.floor(array.length / 2);
    const midValue = array[midIndex];
  
    if (value === midValue) return true;
    else if (array.length > 1 && value < midValue)
      return binarySearch(array.splice(0, midIndex), value);
    else if (array.length > 1 && value > midValue)
      return binarySearch(array.splice(midIndex + 1, array.length), value);
    else return false;
  };
  
  function _binarySearch(nums, target) {
    var floorIndex = -1;
    var ceilingIndex = nums.length;
  
    while (floorIndex + 1 < ceilingIndex) {
      var distance = ceilingIndex - floorIndex;
      var halfDistance = Math.floor(distance / 2);
      var guessIndex = floorIndex + halfDistance;
      var guessValue = nums[guessIndex];
  
      if (guessValue === target) {
        return true;
      }
  
      if (guessValue > target) {
        ceilingIndex = guessIndex;
      } else {
        floorIndex = guessIndex;
      }
    }
  
    return false;
  }
  
  
  // Using binarySearch function
  console.log(binarySearch([1, 2, 3, 4, 5], 3));  // Output: true
  console.log(binarySearch([1, 2, 3, 4, 5], 6));  // Output: false
  
  // Using _binarySearch function
  console.log(_binarySearch([1, 2, 3, 4, 5], 3));  // Output: true
  console.log(_binarySearch([1, 2, 3, 4, 5], 6));  // Output: false