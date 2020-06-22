/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

//A function that returns either a square, triangle, or diamond with a specified character and number of characters.
function printShape(shape, height, character) {
  switch(shape){
    case "Square":
      for(i = 1; i<=height; i++){
        let spaceStr="";
        for(j= 1; j<=height; j++){
          spaceStr +=character;
        }
        console.log(spaceStr);
      }
      break;
    case "Triangle":
      for(i = 1; i<=height; i++){
        let incrementer = 1;
        let spaceStr = "";
        do{
          spaceStr +=character;
          incrementer++;
        }while(incrementer<=i)
        console.log(spaceStr);
      }
      break;
    case "Diamond":
      firstHalf = (height - 1)/2;
      for(let i = 0; i<=firstHalf; i++){
        printDiamond(2-i, 1+2 *i, character)
      }
      for(let i = 1; i<3; i++){
        printDiamond(i, -2 * i + 5, character)
      }
      break;
    default: 
    console.log("That shape does not exist/is not an option currently.");
    break;
  }
}

function printDiamond(shape, height, character){
  let line = "";
  for (let i = 0; i <shape; i++){
    line +=" ";
  }
  for (let i = 0; i <height; i++){
    line +=character;
  }
  for(let i =0; i<character; i++){
    line += " ";
  }
  console.log(line);
}

printShape("Square", 3, "%");
printShape("Triangle", 3, "$");
printShape("Diamond", 5, "*" );
printShape("Orange", 1, "^");