/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

//This function reverses an incoming string and returns the reversed string.
function reverseStr(someStr) {
    let reversedStr = "";
    for(let i = someStr.length-1; i >=0; i--){
        reversedStr += someStr[i];
    }
    return reversedStr;
}
