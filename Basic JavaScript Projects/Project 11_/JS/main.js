function Color_Function() {
    var Color_Output;
    var Colors= document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as it is written on the above list.";
    }
    document.getElementById("Output").innerHTML=Color_Output;
} // Switch statement performs actions based on conditions presented to it(conditional statement). In this example, the switch statement is full of cases or conditions (colors) to be evaluated by the program.