/*let btnNewGame = document.getElementById("btnNewGame");
let btnRollDice = document.getElementById("btnRollDice");
let btnHold = document.getElementById("btnHold");*/
let dice = document.getElementById("dice");
let player1CurrentScore = document.getElementById("player1CurrentScore");
let player2CurrentScore = document.getElementById("player2CurrentScore");
let player1HoldScore = document.getElementById("player1HoldScore");
let player2HoldScore = document.getElementById("player2HoldScore");
/*i = player1 current score*/
let i = 0
/*k = player2 current score*/
let k = 0
/*j = Player 1 dice roll*/
/*l = Player 2 dice roll*/

    /*player1*/
    btnPlayer1RollDice.addEventListener("click", () => {
        let j = Math.ceil(Math.random()*6);
        console.log(j);
        i += j;
        console.log(i);
        player1HoldScore.innerHTML = `<p class="smallTitle">Hold Score</p><p>${i}</p>`;
        player1CurrentScore.innerHTML = `<p class="smallTitle">Current Score</p><p>${i}</p>`;
            if (i >= 21) {
                player1.innerHTML = `<p>Winner!!!</p>`;
                player2.innerHTML = `<p>Loser :(</p>`;
                dice.innerHTML = `<p>Player 1<br><img src="./images/winnerPlayer1.gif"></p>`;
                btnPlayer1RollDice.style.display = "none";
                btnPlayer1Hold.style.display = "none";
            } else if (j == 1) {
                player1.innerHTML = `<p>Loser :(</p>`;
                player2.innerHTML = `<p>Winner!!!</p>`;
                dice.innerHTML = `<p>Player 1<br><img src="./images/1.png"></p>`;
                btnPlayer1RollDice.style.display = "none";
                btnPlayer1Hold.style.display = "none";
                player1HoldScore.innerHTML = `<p class="smallTitle">Hold Score</p><p>0</p>`;
                player1CurrentScore.innerHTML = `<p class="smallTitle">Current Score</p><p>0</p>`;
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

    btnPlayer1Hold.addEventListener("click", () => { 
        player1HoldScore.innerHTML = `<p class="smallTitle">Hold Score</p><p>${i}</p>`;
        btnPlayer2RollDice.style.display = "block";
        btnPlayer1RollDice.style.display = "none";
        btnPlayer2Hold.style.display = "block";
        btnPlayer1Hold.style.display = "none";
    })

    /*player2*/
    btnPlayer2RollDice.addEventListener("click", () => {
        let l = Math.ceil(Math.random()*6);
        console.log(l);
        k += l;
        console.log(l);
        player2HoldScore.innerHTML = `<p class="smallTitle">Hold Score</p><p>${k}</p>`;
        player2CurrentScore.innerHTML = `<p class="smallTitle">Current Score</p><p>${k}</p>`;
            if (k >= 21) {
                player2.innerHTML = `<p>Winner!!!</p>`;
                player1.innerHTML = `<p>Loser :(</p>`;
                dice.innerHTML = `<p>Player 2<br><img src="./images/winnerPlayer2.gif"></p>`;
                btnPlayer2RollDice.style.display = "none";
                btnPlayer2Hold.style.display = "none";
            } else if (l == 1) {
                player2.innerHTML = `<p>Loser :(</p>`;
                player1.innerHTML = `<p>Winner!!!</p>`;
                dice.innerHTML = `<p>Player 2<br><img src="./images/1.png"></p>`;
                player2HoldScore.innerHTML = `<p class="smallTitle">Hold Score</p><p>0</p>`;
                player2CurrentScore.innerHTML = `<p class="smallTitle">Current Score</p><p>0</p>`;
                btnPlayer2RollDice.style.display = "none";
                btnPlayer2Hold.style.display = "none";
            } else if (l == 2) {      
                dice.innerHTML = `<p><img src="./images/2.png"></p>`;
            } else if (l == 3) {      
                dice.innerHTML = `<p><img src="./images/3.png"></p>`;  
            } else if (l == 4) {      
                dice.innerHTML = `<p><img src="./images/4.png"></p>`; 
            } else if (l == 5) {      
                dice.innerHTML = `<p><img src="./images/5.png"></p>`; 
            } else if (l == 6) {      
                dice.innerHTML = `<p><img src="./images/6.png"></p>`; 
            }
        }
    )

    btnPlayer2Hold.addEventListener("click", () => { 
        player2HoldScore.innerHTML = `<p class="smallTitle">Hold Score</p><p>${k}</p>`;
        btnPlayer2RollDice.style.display = "none";
        btnPlayer1RollDice.style.display = "none";
        btnPlayer2Hold.style.display = "none";
        if (k > i) {
            player2.innerHTML = `<p>Winner!!!</p>`;
            player1.innerHTML = `<p>Loser :(</p>`;
            dice.innerHTML = `<p>Player 2<br><img src="./images/winnerPlayer2.gif"></p>`;
        } else if (k < i)  {
            player1.innerHTML = `<p>Winner!!!</p>`;
            player2.innerHTML = `<p>Loser :(</p>`;
            dice.innerHTML = `<p>Player 1<br><img src="./images/winnerPlayer1.gif"></p>`;
        } else if (k == i) {
            player2.innerHTML = `<p>Tie</p>`;
            player1.innerHTML = `<p>Tie</p>`;
            dice.innerHTML = `<p>Tie<br>click New Game to settle it!</p>`;
        }
    })
         
btnNewGame.addEventListener("click", () => {
    location.reload();    
    })