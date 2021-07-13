function full_Sentence() {
    var part_1="<b>This sentence <b>";
    var part_2= "has been made into <b>";
    var part_3= "a complete sentence <b>";
    var part_4= "using the concatenate method. <b>";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

function slice_Method() {
    var Sentence= "I intend to slice a section out of this sentence.";
    var Section= Sentence.slice(12,27);
    document.getElementById("Slice").innerHTML= Section;
}

const sentence = 'Hello there, sorry for shouting!';
"I have never traveled to Ireland before but hope to within the next year!";
var str= "I have never traveled to Ireland before but hope to within the next year!";


function search() {
    var str= "I have never traveled to Ireland before but hope to within the next year!";
}

console.log(sentence.toUpperCase());
console.log(str.search("Ireland"));

function string_Method() {
    var X =350;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function toFixed() { 
    var num = 3.1473456;
    var n = num.toFixed(2);
    document.getElementById("tofixed").innerHTML = n;
  }     // a function using the toFixed method.This method converts a number into a string, rounding to a specified number of decimals.

  function valueof() { 
    document.getElementById("valueof").innerHTML = str.valueOf();  }    // function uses the valueOf method and returns the value of a string.