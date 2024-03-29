/*

// Task : Use your memo function from the previous exercice to memoize your factorial method

Answer:
*/
const memoize = (fn) => {
    let cache = {}
    return (...args) => {
      let n = args[0]
      if (n in cache) {
        console.log('Fetching from cache', n);
        return cache[n]
      } else {
        console.log('Calculating result', n)
        let result = fn(n)
        cache[n] = result
        return result;
      }
    }
  }
  
  const factorial = memoize(
    (x) => {
      if (x === 0) {
        return 1;
      } else {
        return x * factorial(x - 1);
      }
    }
  );
  
  
  console.log(factorial('5')); // calculated
  console.log(factorial('6')); //calculated for 6 and cached for 5
  