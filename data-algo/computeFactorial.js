function computeFactorial(num) {
    let result = 1;

    for(let i = 2; i <= num; i++) {
        console.log(`result = ${result} * ${i} (${result * i})`)
        result *= i;
    }
    return result;
}

// logNumbersRecursively
function logNumbersRecursively(start, end) {
    console.log(`recursively looping from ${start} until ${end}`);

    function recurse(i) {
        console.log('hitting index', i);

        if(i < end) {
            recurse(i + 1);
        }
    }
    recurse(start)
}