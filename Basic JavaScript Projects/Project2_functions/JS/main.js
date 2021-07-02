function Add_Function() {
    var str="26";
    var result= str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML=result; //Creates a button that displays variable str "26 in blue text."
}

function myFunction() {
    var sentence="My favorite thing to do in the morning";
    sentence +="is drink coffee and practice muay thai!";
    document.getElementById("Concatenate").innerHTML = sentence; //A string that converts to a concatenated string when clicked on.
}