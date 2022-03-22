/*----------------------Variables and assignment operators.-------------*/

var sum = 10 + 0;
console.log(sum);

var diff = 45 -33;
console.log(sum);

var multiply= 45*2;
console.log(multiply);

var quitionent  = 66/33;
console.log(quitionent);

// incrementing a number  
myVar= myVar + 100;
// we can instead write this as 
myVar+=100;
// or 
myVar++;
myVar--;

a = a-6;
a -= 6; // both are same.. 

// for multipication.. 
a = a* 5;
a *= 5; 
// both are same. 

// Dividing decimal numbers 
var quitionent = 2.2/5

// REMAINDER OPERATOR IS OFTENLY USED TO MAKE SURE WEATHER THE NUMBER IS ODD OR EVENT 


/*-------------------- Strings in JS -----------------------------------*/

// Declare String Variable 

var firstName = "Aditya";
var lastName = "Singh";

// Using quotations inside the string. 

var myStr = "I am a \"Double quoted\"";

// Escape sequences... 
/**** 
code  output 

\'    Single Quote 
\"    double quote 
\\    backsplash 
\n    new line 
\r    carriage return 
\t    tab 
\b    backspace 
\f    form feed. 
****/

var myString = "First line \n \t Second line \n third line"
console.log(myString)

// Concatenating strings with plus operators. 
var ourStr = "I come first " + "I come second";
var ourstring = "I come first ";
ourstring += "I come second"; 

// Suing variables. 
var myName = " Aditya Singh ";
var myLast = " My name is " + myName + " I am well "
console.log(myLast); 

// length of string 
var firstNameLength = 0;
var firstName = "Aditya Singh"
firstNameLength = firstName.length;
console.log(firstNameLength);

// Bracket Notations for the specific leter of a string 
var firstLetter = ""
var firstname = "Aditya Dhanraj "
var lastletter = ""
firstLetter = firstname[0]
console.log(firstLetter)
lastletter = firstname[firstname.length -1]
console.log(lastletter)
var thirdtolastletter = firstname[firstname.length - 3]
console.log(thirdtolastletter)

// note: Java Strict start the count from Zero 0 

/*
Strings are immutable... Cant be changed once created.. 
*/



// worldBlanks - function changing of words.. 
function worldBlanks(myNoun, myAdjective, myVerb, myAdverb){
  var result ="";
  result += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
  return result;
}
console.log(worldBlanks("dog", "big", "ran", "quickly"));
console.log(worldBlanks("bike", "slow", "flew", "slowly"));


// Arrays in Javascript 
var ourArray = ["John", 23];
var array = ["Aditya ", 1]; 

//Nested Array 
var ourArray = [[" the universe", 23], ["Everthing"], 1010];

//Arrayusing data values.. 
var ourdata = [50,60,70]
var mydata = ourdata[0];
console.log(mydata)

//Modify array data with indexes. 
var ourData = [5,6,7]
ourData[1] = 4;
console.log(mydata) // here the output will be [5,4,7]

//accessing multidimentional arrays with indexes. 
var mArray = [[1,2,3], [4,5,6], [7,8,9],[[10,11,12], 13, 14]];
var mData = mArray[0][0]
console.log(mData)








