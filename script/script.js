let btnNewGame = document.getElementById("btnNewGame");
let btnRollDice = document.getElementById("btnRollDice");
let btnHold = document.getElementById("btnHold");
let dice = document.getElementById("dice");
let player1CurrentScore = document.getElementById("player1CurrentScore");
let player2CurrentScore = document.getElementById("player2CurrentScore");
let player1HoldScore = document.getElementById("player1HoldScore");
let player2HoldScore = document.getElementById("player2HoldScore");
/*i = player1 current score*/
let i = 0
/*j = dice roll*/
/*k = player2 current score*/
let k = 0


    /*player1*/
    btnRollDice.addEventListener("click", () => {
        let j = Math.ceil(Math.random()*6);
        console.log(j)
        i = i + j
        console.log(i)
        player1CurrentScore.innerHTML = `<p class="smallTitle">Current Score</p><p>${i}</p>`;
            if (i >= 21) {
                player1.innerHTML = `<p>Winner!!!</p>`;
                player2.innerHTML = `<p>Loser :(</p>`;
                btnRollDice.style.visibility = "hidden";
                btnNewGame.style.display = "block";
                dice.innerHTML = `<p><img src="./images/winner.gif"></p>`; 
                i = 0
            } else if (j == 1) {
                player1.innerHTML = `<p>Loser :(</p>`;
                player2.innerHTML = `<p>Winner!!!</p>`;
                dice.innerHTML = `<p><img src="./images/1.png"></p>`;
                btnRollDice.style.display = "none";
                btnNewGame.style.display = "block";
                i = 0
            } else if (j == 2) {      
                dice.innerHTML = `<p><img src="./images/2.png"></p>`;
            } else if (j == 3) {      
                dice.innerHTML = `<p><img src="./images/3.png"></p>`;  
            } else if (j == 4) {      
                dice.innerHTML = `<p><img src="./images/4.png"></p>`; 
            } else if (j == 5) {      
                dice.innerHTML = `<p><img src="./images/5.png"></p>`; 
            } else if (j == 6) {      
                dice.innerHTML = `<p><img src="./images/6.png"></p>`; 
            }
        }
    )

    /*player2*/
    btnRollDice.addEventListener("click", () => {
        let j = Math.ceil(Math.random()*6);
        console.log(j)
        k = k + j
        console.log(i)
        player2CurrentScore.innerHTML = `<p class="smallTitle">Current Score</p><p>${i}</p>`;
            if (i >= 21) {
                player2.innerHTML = `<p>Winner!!!</p>`;
                player1.innerHTML = `<p>Loser :(</p>`;
                btnRollDice.style.visibility = "hidden";
                btnNewGame.style.display = "block";
                dice.innerHTML = `<p><img src="./images/winner.gif"></p>`; 
                i = 0
            } else if (j == 1) {
                player2.innerHTML = `<p>Loser :(</p>`;
                player1.innerHTML = `<p>Winner!!!</p>`;
                dice.innerHTML = `<p><img src="./images/1.png"></p>`;
                btnRollDice.style.display = "none";
                btnNewGame.style.display = "block";
                i = 0
            } else if (j == 2) {      
                dice.innerHTML = `<p><img src="./images/2.png"></p>`;
            } else if (j == 3) {      
                dice.innerHTML = `<p><img src="./images/3.png"></p>`;  
            } else if (j == 4) {      
                dice.innerHTML = `<p><img src="./images/4.png"></p>`; 
            } else if (j == 5) {      
                dice.innerHTML = `<p><img src="./images/5.png"></p>`; 
            } else if (j == 6) {      
                dice.innerHTML = `<p><img src="./images/6.png"></p>`; 
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