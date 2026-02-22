// Task: CLEAN SOLUTION!
// Highest Scoring Word (click to show)
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// Answer:
function high(x) {
  const words = x.split(" ");
  
  const getScore = (word) => {
    return word.split("").reduce((sum, char) => {
      return sum + char.charCodeAt() - 96;
    }, 0);
  };
  
  let maxWord = "";
  let maxScore = 0;
  
  words.forEach(word => {
    const score = getScore(word);
    if (score > maxScore) {
      maxScore = score;
      maxWord = word;
    }
  });
  
  return maxWord;
}