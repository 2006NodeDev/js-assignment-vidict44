/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.

//This function returns a boolean of true if the number is even and false if the number is odd w/o modulus.
Do not use % operator. */
function isEven(someNum) {
    return !(someNum & 1) ? true:false;
  
}
