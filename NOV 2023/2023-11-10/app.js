/** Task:
Given a string of characters, return the character that appears the most often.

Answer:
*/const max = string => {
    const characters = {};

    for (let character of string)
      characters[character] = characters[character] + 1 || 1;
  
    let maxCount = 0;
    let maxCharacter = null;
  
    for (let character in characters) {
      if (characters[character] > maxCount) {
        maxCount = characters[character];
        maxCharacter = character;
      }
    }
  
    return maxCharacter;
  };
  
  
  
  console.log(max("Hello World!"), "l")