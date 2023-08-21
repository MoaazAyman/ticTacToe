let turn = document.querySelector('.turn');
let currplayer = "X";
let allCells = [];
let restart = document.querySelector('.restart');



//clicking the cells with "X" and "O", and the text that shows up in the "turn" div.

function game(id) {
    let element = document.getElementById(id);
    if(currplayer == 'X' && element.innerHTML == '') {
        element.innerHTML = 'X'
        currplayer = "O";
        turn.innerHTML = `${currplayer} turn!`
    } else if(currplayer = "O" && element.innerHTML == '') {
        element.innerHTML = 'O';
        currplayer = "X";
        turn.innerHTML = `${currplayer} turn!`
    }

    winner();
}


//this function putts every three consecative cells as winner if ther have the same innerHTML
function winner () {

    //collecting all cells in the array to control them.

    for(let i = 1; i < 10; i++) {
         allCells[i] = document.getElementById("cell" + i).innerHTML;
    }

    //checking if three consecative cells have the same innerHTML

    if(allCells[1] == allCells[2] && allCells[2] == allCells[3] && allCells[1] != '') {
        endGame(1, 2, 3)
    }

    else if (allCells[4] == allCells[5] && allCells[5] == allCells[6] && allCells[4] != '') {
        endGame(4, 5, 6)
    }

    else if (allCells[7] == allCells[8] && allCells[8] == allCells[9] && allCells[7] != '') {
        endGame(7, 8, 9)
    }

    else if (allCells[1] == allCells[4] && allCells[4] == allCells[7] && allCells[1] != '') {
        endGame(1, 4, 7)
    }

    else if (allCells[2] == allCells[5] && allCells[5] == allCells[8] && allCells[2] != '') {
        endGame(2, 5, 8)
    }

    else if (allCells[3] == allCells[6] && allCells[6] == allCells[9] && allCells[3] != '') {
        endGame(3, 6, 9)
    }

    else if (allCells[1] == allCells[5] && allCells[5] == allCells[9] && allCells[1] != '') {
        endGame(1, 5, 9)
    }

    else if (allCells[3] == allCells[5] && allCells[5] == allCells[7] && allCells[3] != '') {
        endGame(3, 5, 7)
    } 
    
    else if(allCells[1] && allCells[2] && allCells[3] && allCells[4] && allCells[5] && allCells[6] && allCells[7] && allCells[8] && allCells[9]!= '') {
            draw();
        }
    }
{
}



// sets the winner name in the 'turn' title and colores the background of the 3 winners cells and reloads the page after 3 sec

function endGame(num1, num2, num3) {

    turn.innerHTML = `${allCells[1]} won!`;

    document.getElementById("cell" + num1).style.backgroundColor = '#000';
    document.getElementById("cell" + num2).style.backgroundColor = '#000';
    document.getElementById("cell" + num3).style.backgroundColor = '#000';
    
    setInterval(function() {
        turn.innerHTML += '.'
    }, 1000)

    blockingAllEvents();

    setTimeout(function() {
         location.reload();
    }, 3000)

}



function draw() {

    turn.innerHTML = 'Draw!';
        setInterval(function() {
            turn.innerHTML += '.'
        }, 1000)
    
        blockingAllEvents();
    
        setTimeout(function() {
             location.reload();
        }, 3000)
}


//function that blocks all events on the document. (this function will be recalled in the endGame() function)

function blockingAllEvents() {
    
    window.addEventListener("click", (e) => {
        document.querySelector('body').classList.add('loading');
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
      }, true)
}



// when clicking on the restart button

restart.addEventListener('click', function() {

    turn.innerHTML = 'X player is gonna start';
    
    for(let i = 1; i < 10; i++) {

        allCells[i] = document.getElementById("cell" + i);
       
        allCells.forEach(element => {
            element.innerHTML = '';
        });

    }


});