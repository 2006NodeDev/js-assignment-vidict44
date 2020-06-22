/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

//The fib function returns the sum of the two numbers preceding that specific number.
let memo = {
    1:0,
    2:1,
}

function fib(n) {
    if(memo[n]||memo[n]===0){
        return memo[n];
    }
    else {
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
}