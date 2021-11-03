let resetBtn = document.getElementById("resetBtn");
let player1 = document.getElementById("player1");
let score = document.getElementById("score");
let dice = document.getElementById("dice");
let rollBtn = document.getElementById("rollBtn");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let i = 0

/*document.addEventListener("keydown", (e) => {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    console.log(e);
    console.log(e.key);
    if (e.key == "r" || e.key == "R") {
        let j = Math.ceil(Math.random()*6);
        console.log(j)
        i = i + j
        console.log(i)
        score.innerHTML = `<p>${i}</p>`;
        if (j == 1) {
            player1.innerHTML = `<p>You lose :(<br>Press s or click 'start again' to try again</p>`;
            one.style.display = "block";
            rollBtn.style.visibility = "hidden";
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
});*/

rollBtn.addEventListener("click", () => {
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
    score.innerHTML = `<p>${i}</p>`;
        if (i >= 21) {
            player1.innerHTML = `<p>Winner!!!</p>`;
            rollBtn.style.display = "none";
            resetBtn.style.display = "block";
            winner.style.display = "block"; 
            i = 0
        } else if (j == 1) {
            player1.innerHTML = `<p>Loser :(</p>`;
            one.style.display = "block";
            rollBtn.style.display = "none";
            resetBtn.style.display = "block";
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

resetBtn.addEventListener("click", () => {
    location.reload();    
    }
)
document.addEventListener("keydown", (e) => {
    if (e.key == "s" || e.key == "S") {
        location.reload();
    }
});

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