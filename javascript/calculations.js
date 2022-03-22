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






