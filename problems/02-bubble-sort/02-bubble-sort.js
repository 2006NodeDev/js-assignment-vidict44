/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

//This function does a bubble sort, which means that it goes through a list and compares adjacent elements and swaps them if they are in the wrong order. It passes through the list until the list is sorted.
function bubbleSort(numArray) {
    let changingBoolean;
    let arrayLengthAndIncrementer = (numArray.length)-1;
    let swappingVariable = numArray;
    let temporaryHoldingVariable;

    do{
        changingBoolean = false;

        for(let i = 0; i <arrayLengthAndIncrementer; i++){
            if(swappingVariable[i]<swappingVariable[i+1]){

                temporaryHoldingVariable = swappingVariable[i];
                swappingVariable[i] = swappingVariable[i+1];
                swappingVariable[i+1] = temporaryHoldingVariable;
                changingBoolean = true;
            }
        }
        
        arrayLengthAndIncrementer--;
    } while(changingBoolean);

    
    return swappingVariable;
  
}

