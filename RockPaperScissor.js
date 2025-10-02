const rockBtn = document.getElementById("rock-choice-container");
const paperBtn = document.getElementById("paper-choice-container");
const scissorBtn = document.getElementById("scissor-choice-container");
const yourChoice = document.getElementById("your-choice");
const compChoice = document.getElementById("comp-choice");
const winner = document.getElementById("winner");
const playerSide = document.getElementById("player-side");
const compSide = document.getElementById("computer-side");
let rockPlayer = document.getElementById("rock-player");
let rockComputer = document.getElementById("rock-computer");


rockBtn.onclick = function(){
    rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

    setTimeout(() => {
        yourChoice.textContent = `You choose: ROCK`;
        rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    }, 2000);
    let randNum = Math.floor(Math.random() * 6) + 1;

    switch(randNum){
            case 3:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 2:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 1:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
            case 4:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 5:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 6:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
        }

    if(randNum == 3){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 2){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
        }, 2000);
        
    }
    else if(randNum == 1){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 4){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 5){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
        }, 2000);
        
    }
    else if(randNum == 6){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
        }, 2000);
    }

    playerSide.classList.remove("player-side");
    playerSide.offsetWidth; 
    playerSide.classList.add("player-side");

    compSide.classList.remove("computer-side");
    compSide.offsetWidth; 
    compSide.classList.add("computer-side");
}

paperBtn.onclick = function(){
    rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

    setTimeout(() => {
        yourChoice.textContent = `You choose: PAPER`;
        rockPlayer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
    }, 2000);
    let randNum = Math.floor(Math.random() * 6) + 1;

    switch(randNum){
            case 3:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 2:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 1:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
            case 4:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 5:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 6:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
        }

    if(randNum == 3){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 2){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
        
    }
    else if(randNum == 1){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 4){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 5){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
        
    }
    else if(randNum == 6){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
        }, 2000);
    }

    playerSide.classList.remove("player-side");
    playerSide.offsetWidth; 
    playerSide.classList.add("player-side");

    compSide.classList.remove("computer-side");
    compSide.offsetWidth; 
    compSide.classList.add("computer-side");
}

scissorBtn.onclick = function(){
    rockPlayer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";

    setTimeout(() => {
        yourChoice.textContent = `You choose: SCISSOR`;
        rockPlayer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
    }, 2000);
    let randNum = Math.floor(Math.random() * 6) + 1;

    switch(randNum){
            case 3:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 2:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 1:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
            case 4:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: ROCK`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED ROCK.png";
                }, 2000);
                break;
            case 5:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: PAPER`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED PAPER.png";
                }, 2000);
                break;
            case 6:
                setTimeout(() => {
                    compChoice.textContent = `Computer choose: SCISSOR`;
                    rockComputer.src = "ROCK PAPER SCISSOR/COLORED SCISSOR.png";
                }, 2000);
                break;
        }

    if(randNum == 3){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 2){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 1){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 4){
        setTimeout(() => {
            winner.textContent = `THE PLAYER LOST`;
            winner.style.backgroundColor = "rgba(167, 0, 0, 1)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 5){
        setTimeout(() => {
            winner.textContent = `THE PLAYER WON`;
            winner.style.backgroundColor = "rgb(0, 128, 0)";
            winner.style.color = "white";
        }, 2000);
    }
    else if(randNum == 6){
        setTimeout(() => {
            winner.textContent = `THE GAME IS DRAW`;
            winner.style.backgroundColor = "rgb(128, 128, 128)";
            winner.style.color = "white";
        }, 2000);
    }

    playerSide.classList.remove("player-side");
    playerSide.offsetWidth; 
    playerSide.classList.add("player-side");

    compSide.classList.remove("computer-side");
    compSide.offsetWidth; 
    compSide.classList.add("computer-side");
}

