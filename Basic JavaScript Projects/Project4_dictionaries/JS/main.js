function Dictionary() {
    var Vehicle= {
        Make: "BMW",
        Model: "M3",
        Color: "Black",
        Year: "2021",
    };
    delete Vehicle.Model;
    document.getElementById("Dictionary").innerHTML=Vehicle.Model;
}


