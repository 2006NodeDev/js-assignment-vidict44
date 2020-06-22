/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

//This function returns a true if a string reads the same backward as forward and false if it does not. 
function isPalindrome(someStr) {

    let fullStringLength = someStr.length;
    let midStringLength = Math.floor(fullStringLength/2);
    someStr = someStr.toLowerCase();
    for(let i = 0; i <midStringLength; i++){
        if(someStr[i] !== someStr[fullStringLength-1-i]){
            return false;
        }

    }
    return true;
  
}

