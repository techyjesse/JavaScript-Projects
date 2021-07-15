function count_to_Ten() {
    var Digit= "";
    var X = 1;
    while (X < 11) {   
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML= Digit;
}   // While loop, as long as X is less than 11. The counter would stop in this case at 10 and the loop would be exited.


let str="Hello, I wonder how many letters are in this sentence?";
document.getElementById("length").innerHTML= str.length;; // str.length allows us to display how many characters are in a string.

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

function array_Function() {
    var Ballers= []
    Ballers[0]= "Steph Curry";
    Ballers[1]= "Kyrie Irving";
    Ballers[2]= "Kevin Durant";
    Ballers[3]="Giannis Antetokounmpo";
    Ballers[4]="Anthony Davis";
    document.getElementById("Array").innerHTML= "My favorite player in the NBA is: " + Ballers[0] +".";
} // Array function 

function constant_Function() {
    const New_Vehicle = {make:"BMW", model:"M3", color: "Black"};
    New_Vehicle.color = "blue";
    New_Vehicle.price = "$50,000";
    New_Vehicle.mileage = "250";
    document.getElementById("Constant").innerHTML=" The cost of the " + New_Vehicle.color + New_Vehicle.make + New_Vehicle.model + "is going to be " + New_Vehicle.price + ".";     //The constant New_Vehicle does not change although it's properties can vary. Function is used to display a string of data about the object.
}

var X = myFunction(4,4);
function myFunction(a,b) {
    return a*b;
}
document.getElementById("multiply").innerHTML= X; // Return statement for simple multiplication equation.

let computer= {
    manufacturer: "HP ENVY",
    processor: "intel Core i5",
    year: "2021",
    memory: "16 GB",
    storage: "256GB",
    description: function() {
        return "My laptop is an " + this.manufacturer + "with an " + this.processor + "processor and has " + this.memory + "of memory and " + this.storage + "of storage.";
    }
};
document.getElementById("laptop_Object").innerHTML= computer.description();
//let keyword defines our object and it's properties and the function is specific to this block of code. 


