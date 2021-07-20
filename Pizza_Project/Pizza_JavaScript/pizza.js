function getReceipt() { //  initializes the string so it can get passed from function to function, growing line by line intp a full receipt
    var text1 = "<h3>Your Order:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 13;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 17;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 20;
    } else if (selectedSize === "Big Dog Pizza") {
        sizeTotal = 25;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");// these variable will be passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping (runningTotal,text1) { // get toppings using array and if/else statements
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
   var toppingCount = selectedTopping.length;
   if (toppingCount > 1) {
       toppingTotal = (toppingCount -1);
   } else {
       toppingTotal = 0;
   }
   runningTotal = (runningTotal + toppingTotal);
   console.log("total selected topping items: "+toppingCount);
   console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
   console.log("topping text1: "+text1);
   console.log("Purchase Total: "+"$"+runningTotal+".00");
   document.getElementById("showText").innerHTML=text1;
   document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"
        +runningTotal+".00"+"</strong></h3>";
};