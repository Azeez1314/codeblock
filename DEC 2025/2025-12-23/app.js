// Task:
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// function getRealFloor(americanFloor) {
// }

function getRealFloor(americanFloor) {
    if (americanFloor > 13) {
          // Subtract 2 for floors greater than 13 (to account for 1st and 13th floor)
          return americanFloor - 2;
      } else if (americanFloor === 13) {
          // Floor 13 doesn't exist in the European system, so it maps to 12
          return 12;
      } else if (americanFloor > 0) {
          // Subtract 1 for floors between 1 and 12 (to account for ground floor)
          return americanFloor - 1;
      } else {
          // Basements and ground floor stay the same
          return americanFloor;
      }
  }
  
