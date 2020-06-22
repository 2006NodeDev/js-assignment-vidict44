/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
//This function splices an element and returns the element it deleted from the array.
function spliceElement(someArr, index) {
 return(someArr.splice(index, 1));
 
}

let fish = ['angel', 'clown', 'mandarin', 'sturgeon']

console.log(spliceElement(fish, 3));
console.log(fish);
