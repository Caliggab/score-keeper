let scoreKeeper = document.querySelector("#score")
let numInput = document.querySelector("#number")
let p1btn = document.querySelector("#player1")
let p2btn = document.querySelector("#player2") 
let resetbtn = document.querySelector("#reset")
let scoreBoard = document.querySelector("#scoreBoard")

let p1score = 0;
let p2score = 0;
let numValue = 0;

window.onload = function() {
    numInput.value = 0;
    }
    

numInput.addEventListener('click', function () {
    numValue = numInput.value
    
})

p1btn.addEventListener('click', function () {
    if (numValue === 0 ) {
        alert("Please input a round of rounds.")
    }
    else if (p1score +1 > numValue / 2) {
        alert("Player 1 won! Yay!")        
        let p = document.createElement("p")
        p.innerText = `Player 1 won: ${p1score +1} to ${p2score}.`
        scoreBoard.appendChild(p)
        p1score = 0;
        p2score = 0;
        scoreKeeper.innerHTML = `${p1score} to ${p2score}`
    }
    else {
        p1score++;
        scoreKeeper.innerHTML = `${p1score} to ${p2score}`
    }
})

p2btn.addEventListener('click', function () {
    if (numValue === 0 ) {
        alert("Please input a round of rounds.");
    }
        else if (p2score +1 > numValue / 2) {
        alert("Player 2 won! Yay!")        
        let p = document.createElement("p")
        p.innerText = `Player 2 won: ${p2score +1 } to ${p1score}.`
        scoreBoard.appendChild(p)
        p1score = 0;
        p2score = 0;
        scoreKeeper.innerHTML = `${p1score} to ${p2score}`
    }
    else {
        p2score++;
        scoreKeeper.innerHTML = `${p1score} to ${p2score}`        
    }
})

resetbtn.addEventListener('click', function (){
        window.location.reload();
    } )





