document.write("Text" +13);

function na_number1() {
    document.getElementById("Test1").innerHTML= isNaN('Text'); // Displays true or false. is Not a number (Text string or numeral.) "Returns true."
}

function na_number2() {
    document.getElementById("Test2").innerHTML=isNaN('225'); //Displays true or false. is a number. "returns false."
}


function myFunction() {  
    document.getElementById("demo1").innerHTML = // Returns infinity and -infinity.
    3E310 + "<br>" +  -3E310;
  }

console.log(4+12); //Console log in devtools displays the answer. (16)
console.log(3>1);   //Console log in devtools displays the answer. (true.)

function equal_function() {
    let x=10;
    document.getElementById("demo2").innerHTML= (x==8) //Determines if values in function are equal to one another or not. Returns true or false.
}

function trueFunction() {
    x=5
    y=5
    document.getElementById("true").innerHTML=(x===y);
}

function falseFunction1() {
    x=12
    y=10
    document.getElementById("false1").innerHTML=(x===y);
}

function falseFunction2() {
    x="Twelve"
    y=12
    document.getElementById("false2").innerHTML=(x===y);
}

function andFunction() {
    let x=6;
    let y=3;
    document.getElementById("and").innerHTML=(x<10 && y>1) + "<br>" + (x<10 && y<1);
}

function orFunction() {
    document.getElementById("or").innerHTML= (5>10 || 10>4);
}

function notFunction() {
    document.getElementById("not1").innerHTML= !(20>10); //Returns false
    document.getElementById("not2").innerHTML= !(5>9); //Returns true
}




