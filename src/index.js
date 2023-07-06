'use strict'
function euclideanAlgorithm(a, b){
    while(b !== 0){
        let j = a % b;
        a = b;
        b = j;
    }
    return a
}

console.log(euclideanAlgorithm(100, 22))