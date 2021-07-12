function Ride_Function() { //Evaluates user input in text box to determine if heigh is tall enough to ride.
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride= (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML= Can_Ride + "to ride.";
}


function Vote_Function() {  //Evaluates user input in text box to determine if user is old enough to vote or not.
    var Age, Can_Vote;
    Age=document.getElementById("Age").value;
    Can_Vote= (Age < 18) ? "Unfortunately, you are too young" : "Congratulations, you are old enough";   
    document.getElementById("Vote").innerHTML= Can_Vote + "to vote."  
    
}                   // This function features a ternary operator and allows a user to inpput their age and returns a display of whether or not the user is old enough to vote.

function Vehicle(Make, Model, Year, Color) { //function (Vehicle) is an object constructor.
    this.Vehicle_Make= Make; // As I added each line, this boldened the text of the class in the parantheses above.
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge", "Viper", "2020", "Red");
var Emliy= new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik= new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a" + Erik.vehicle_Color +"-colored" + Erik.Vehicle_Model + "manufactured in" + Erik.Vehicle_Year;
}


function proBoxer(Name, Class, Wins, Losses) { 
    this.proBoxer_Name = Name;
    this.proBoxer_Class= Class;
    this.proBoxer_Wins= Wins;
    this.proBoxer_Losses= Losses;
}

var Alvarez = new proBoxer("Canelo Alvarez", "Middleweight", "58", "1");
var Crawford = new proBoxer("Terrance Crawford", "Lightweight", "37", "0" );
var Davis = new proBoxer("Gervonta Davis", "Super Lightweight", "25", "0");
function proFunction() {
    document.getElementById("New_and_This").innerHTML="The most dominant boxer" + Alvarez.proBoxer_Name + ", fights in the" + Alvarez.proBoxer_Class +"class and has a record of" + Alvarez.proBoxer_Wins + "-" + Alvarez.proBoxer_Losses + ".";
}

function countFunction() {      
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var Starting_point= 3;
        function Plus_One() {Starting_point += 1;}
        Plus_One();
        return Starting_point;
    }
} //This function contains a nested function in it (Count & Plus_One) that add additional steps in it's program to the parent function (countFunction). Takes the starting point integer and adds a +1 to it displaying the result when called in HTML.