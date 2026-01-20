// Using Dynamic Programming for Greedy Algo

const cache = {};
const coins = [10, 6, 1]

const makeChange = (c) => { 
    //Return the value if it's in the cache
    if (cache[c]) return cache[c]

    let minCoins = -1;

    // Find the best coin
    if (value === 0) return 0;
    coins.forEach(coin => {
        if (c - coin >= 0) {
            let currMinCoins = makeChange(c - coin);
            if(minCoins == -1 || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    })
    return minCoins + 1
}
