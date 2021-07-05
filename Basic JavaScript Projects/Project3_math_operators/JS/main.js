window.alert(Math.random() * 25); // Displays a random number between 0 and 25 in a window alert.


function addFunction() {
    var x=7;
    var y=2;
    var result = x+y;
    document.getElementById("Math").innerHTML=result; //Simple addition equation.
}

function subtractionFunction() {
    var subtraction= 5-2;
    document.getElementById("Math").innerHTML= subtraction; // Simple subtraction equation.
}

function multiplication() {
    var multiply=5*20;
    document.getElementById("Math").innerHTML= multiply; // Simple multiplication equation
}

function division() {
    var divide=100/5;
    document.getElementById("Math").innerHTML=divide; // Simple division equation 
}s


function more_Math() {
    var more_Math= 5 + 3 + 18;                         
    document.getElementById("Math").innerHTML= more_Math; //Multi-line math equation. Text can also be added to this answer if needed to display it in numbers and words.
}

function modulus_Operator() {
    var simple_Math= 25 % 6;
    document.getElementById("Math").innerHTML= "When you divide 25 by 6, you get 5 with a remainder of: " + simple_Math; // The modulus computes the equation and displays the above quoted text in it's answer + whatever the remainder is. "simple_Math is representing the remainder in this example. "
}

function negation_Operator() {
    var x= 10;
    document.getElementById("Math").innerHTML= -x; //Operator turns variable into a negative integer.
}

function increment_Operator() {
var X=5
X++;
document.getElementById("Math");
document.write(X); //The increment operator will increase the variable by 1.
}

function decrement_Operator() {
var Y=7
Y--;
document.getElementById("Math");
document.write(Y); //The decrement operator will decrease the variable by 1.
}




function Math_round() {
    document.getElementById("Math").innerHTML= Math.round(2.3); 
}                       //This is attached to a button in HTML that will round 2.3 to it's nearest whole integer. The button's id is "Math" and it's onclick is "Math.round()".