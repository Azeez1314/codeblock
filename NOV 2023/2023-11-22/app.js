/** Task:
Given an array of numbers, calculate the mean, median, and mode.

Answer:
*/

class Stats {
    constructor(array) {
      this.array = array;
    }
  
    static round(value, round = 2) {
      return Math.round(value * Math.pow(10, round)) / Math.pow(10, round);
    }
  
    mean() {
      return this.array.reduce((sum, value) => sum + value, 0) / this.array.length;
    }
  
    median() {
      const arraySorted = this.array.sort();
      return arraySorted.length % 2 === 0
        ? (arraySorted[arraySorted.length / 2 - 1] +
            arraySorted[arraySorted.length / 2]) /
            2
        : arraySorted[Math.floor(arraySorted.length / 2)];
    }
  
    mode() {
      const table = {};
      this.array.forEach(value => (table[value] = table[value] + 1 || 1));
  
      let modes = [];
      let max = 0;
      for (const key in table) {
        const value = parseFloat(key);
        const count = table[key];
        if (count > max) {
          modes = [value];
          max = count;
        } else if (count === max) modes.push(value);
      }
  
      if (modes.length === Object.keys(table).length) modes = [];
  
      return modes;
    }
  }
  
  const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
  const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);
  
    console.log(Stats.round(stat1.mean()), 3.43);
    console.log(stat1.median(), 4);
    console.log(stat1.mode(), [4, 5]);

    console.log(Stats.round(stat2.mean()), 2.5);
    console.log(stat2.median(), 2.5);
    console.log(stat2.mode(), []);   