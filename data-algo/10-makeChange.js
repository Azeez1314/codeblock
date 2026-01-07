// Greedy Algo

const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a)
    let coinsTotal = 0;
    let i = 0;

    while (amount > 0) {
        if (coins[i] <= amount ) {
            amount -= coins[i]
            coinsTotal++
        } else {
            i++
        }
    }
    return coinsTotal;
}

makeChange([5, 10, 25], 50)


// Recursion because sometimes it may not work for edge cases
const makeChangeNew = (value, i) => {
    recursionCounter++;
    console.log(`${recursionCounter} : calling ${value} at ${i}`)

    if (value === 0)
        return 0;
    let minCoins;
    coins.forEach((coin, i) => {
        
    })
}
