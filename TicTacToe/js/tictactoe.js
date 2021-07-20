let activeplayer = 'x';//loggs turn
let selectedsquares = [];//array of of move.determines win conditions.



function placexoro(squarenumber) { //function playing x or o in a square
    if(!selectedsquares.some(element => element.includes(squarenumber))) {
        let select = document.getElementById(squarenumber);
        if (activeplayer === 'x') {
            select.style.backgroundImage='url("images/x.png")';
        } else {
            select.style.backgroundImage='url("images/o.png")';
        }
        selectedsquares.push(squarenumber + activeplayer);         //square number and activeplayer are concatenated together and added to array

        checkwinconditions(); //function to check win conditions
        if (activeplayer === 'x') {
            activeplayer = 'o'
        } else {
            activeplayer = 'x';
        }
        audio('./media/place.mp3');
        if(activeplayer==='o'){
            disableclick();
            setTimeout(function() {computersturn();}, 1000);
        }
        return true;
    }

    function computersturn () {
        let success = false; //Boolean needed for while loops
        let pickasquare; //this allow loop to keep trying if square is selected already
        while(!success) {
            pickasquare = String(Math.floor(Math.random() * 9));
            if (placexoro(pickasquare)) {
                placexoro(pickasquare);
                success = true;
            };
        }
    }

}

function checkwinconditions() {
    if (arrayincludes('0x', '1x', '2x')) {drawwinline(50,100,558,100); }
    else if (arrayincludes('3x', '4x', '5x')) {drawwinline(50,304,558,304); }
    else if (arrayincludes('6x', '7x', '8x')) {drawwinline(50,508,558,508); }
    else if (arrayincludes('0x', '3x', '6x')) {drawwinline(100,50,100,558); }
    else if (arrayincludes('1x', '4x', '7x')) {drawwinline(304,50,304,558); }
    else if (arrayincludes('2x', '5x', '8x')) {drawwinline(508,50,508,558); }
    else if (arrayincludes('6x', '4x', '2x')) {drawwinline(100,508,510,90); }
    else if (arrayincludes('0x', '4x', '8x')) {drawwinline(100,100,520,520); }
    else if (arrayincludes('0o', '1o', '2o')) {drawwinline(50,100,558,100); }
    else if (arrayincludes('3o', '4o', '5o')) {drawwinline(50,304,558,304); }
    else if (arrayincludes('6o', '7o', '8o')) {drawwinline(50,508,558,508); }
    else if (arrayincludes('0o', '3o', '6o')) {drawwinline(100,50,100,558); }
    else if (arrayincludes('1o', '4o', '7o')) {drawwinline(304,50,304,558); }
    else if (arrayincludes('2o', '5o', '8o')) {drawwinline(508,50,508,558); }
    else if (arrayincludes('6o', '4o', '2o')) {drawwinline(100,508,510,90); }
    else if (arrayincludes('0o', '4o', '8o')) {drawwinline(100,100,520,520); }
    else if (selectedsquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetgame(); }, 1000);
    }
    function arrayincludes (squarea, squareb, squarec) {
        const a = selectedsquares.includes(squarea);
        const b = selectedsquares.includes(squareb);
        const c = selectedsquares.includes(squarec);
        if (a === true && b === true && c === true) {return true; }
    }
}    

function disableclick() { //makes body elements temporarily unclickable
    body.style.pointerevents = 'none';
    setTimeout(function() {body.style.pointerevents = 'auto';}, 1000);
}

function audio(audiourl) {
    let audio = new Audio(audiourl);
    audio.play();
}

function drawwinline(coordx1, coordy1, coordx2, coordy2) {//html canvas to draw win lines
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d'); 
    let x1=coordx1,
    y1=coordy1,
    x2=coordx2, 
    y2=coordy2,
    x=x1,
    y=y1;

    function animatelinedrawing() {//interacts with canvas
        const animationloop = requestAnimationFrame(animatelinedrawing);
        c.clearRect(0,0,608,608);
        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth= 10;
        c.strokeStyle='rgba(70,255,33,0.8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) { //checks if endpoint reached
            if(x < x2) { x +=10; }
            if(y < y2) { y +=10; }
            if(x >= x2 && y >= y2)  { cancelAnimationFrame(animationloop); }
        }
        if (x <= x2 && y >= y2) {
            if(x < x2) { x +=10; }
            if(y > y2) { y -=10; }
            if(x >= x2 && y <= y2)  { cancelAnimationFrame(animationloop); }
        }
    }
    
    function clear() { //clears canvas
        const animationloop = requestAnimationFrame(clear); 
        c.clearRect(0,0,608,608);
        cancelAnimationFrame (animationloop);
    }
    disableclick();
    audio('./media/winGame.mp3'); //winning sound
    animatelinedrawing();
    setTimeout(function() {clear(); resetgame(); }, 1000);
}

function resetgame() { //resets the game 
    for (let i = 0; i<9; i++) {
            let square = document.getElementById(String(i));
            square.style.backgroundImage = ""
    }
    selectedsquares = [];

}