let btnNewGame = document.getElementById("btnNewGame");
let btnRollDice = document.getElementById("btnRollDice");
let btnHold = document.getElementById("btnHold");
let dice = document.getElementById("dice");
let player1CurrentScore = document.getElementById("player1CurrentScore");
let player2CurrentScore = document.getElementById("player2CurrentScore");
let player1HoldScore = document.getElementById("player1HoldScore");
let player2HoldScore = document.getElementById("player2HoldScore");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
/*i = player1 current score*/
let i = 0
/*j = dice roll*/
/*k = player2 current score*/



btnRollDice.addEventListener("click", () => {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    arrow.style.display = "none";
    let j = Math.ceil(Math.random()*6);
    console.log(j)
    i = i + j
    console.log(i)
    player1CurrentScore.innerHTML = `<p class="smallTitle">Current Score</p><p>${i}</p>`;
        if (i >= 21) {
            player1.innerHTML = `<p>Winner!!!</p>`;
            btnRollDice.style.visibility = "hidden";
            btnNewGame.style.display = "block";
            winner.style.display = "block"; 
            i = 0
        } else if (j == 1) {
            player1.innerHTML = `<p>Loser :(</p>`;
            one.style.display = "block";
            btnRollDice.style.display = "none";
            btnNewGame.style.display = "block";
            /*loser.style.display = "block"; */
            i = 0
        } else if (j == 2) {      
            two.style.display = "block";  
        } else if (j == 3) {      
            three.style.display = "block";  
        } else if (j == 4) {      
            four.style.display = "block";  
        } else if (j == 5) {      
            five.style.display = "block";  
        } else if (j == 6) {      
            six.style.display = "block";  
        }
    }
)

btnNewGame.addEventListener("click", () => {
    location.reload();    
    }
)
/*document.addEventListener("keydown", (e) => {
    if (e.key == "s" || e.key == "S") {
        location.reload();
    }
});*/

/*dice.innerHTML = `<p>${document.getElementById("two")}</p>`;*/

/*button.addEventListener("click", () => {
    if(image.style.display =="none"){
    image.style.display = "block";
    button.textContent = "hide";
   } else {
    image.style.display = "none";
    button.textContent = "show"; 
   }
})*/