/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

//This function returns the product of a factorial (a factorial is the multiplication of the number itself and all the numbers below it).
function factorial(sumNum) {
    if(sumNum === 0){
        return 1;
    }
    else{
        return sumNum * factorial (sumNum-1);
    }
  
}