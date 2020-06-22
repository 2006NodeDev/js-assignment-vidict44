/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

//This function returns a substring from the parameters that are sent in and checks for any errors.
function substring(someStr, startIndex, endIndex) {
    try{
        const sizeofParam = someStr.length;

        if(someStr === undefined || startIndex === undefined || endIndex === undefined){
            throw "The input is invalid, please enter valid variables."

        }
        else if(startIndex>sizeofParam || endIndex>sizeofParam){
            throw "Input is invalid because it is out of bounds of the length."

        }
        else if ((startIndex-endIndex)>-1){
            throw "Input is invalid because the starting value is greater than the ending value."
        }
        return someStr.substring(startIndex, endIndex);
    }
    catch(err){
        return err;
    }
}

console.log(substring('hello', 0 , 6));