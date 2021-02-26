let avg = function avg(array) {
    if (array && array.length) {
        return array.reduce((a, b) => a + b, 0) / array.length
    }
    else return 0

}

console.log(avg([1, 2]))


