var X=50
function subFunction() {
    document.getElementById("subtraction").innerHTML="X - 15 = "
    document.write(X - 15 + "<br>");
}
function addFunction() {
    document.write(X + 12 +"<br>");
}
function timesFunction() {
    document.write(X * 3 + "<br>")
}
subFunction();
addFunction();
timesFunction();

function get_Date() {
    if (new Date().getHours() <23) {
        document.getElementById("Greeting").innerHTML="How are you doing this evening?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Purchase="You are old enough to purchase alcohol!";
    }
    else {
        Purchase= "You are not old enough to purchase alcohol."
    }
        document.getElementById("How_old_are_you?").innerHTML= Purchase;
}

function timeFunction() {
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply= "It is the afternoon.";
    }
    else{
        Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}