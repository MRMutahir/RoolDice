var rolldicecontrol = document.querySelector('.rolldicecontrol');
var New_game = document.querySelector('.New game');
var Hold = document.querySelector('.Hold');
var diceimg = document.querySelector('.diceimg');
var scorePlayer1 = document.querySelector('.scorePlayer1');
var scorePlayer2 = document.querySelector('.scorePlayer2');
var player2score = document.querySelector('#player2score');
var player1score = document.getElementById('player1score');
// console.log(player1score, player2score)
// console.log(scorePlayer2);
// console.log(diceimg)
// console.log(rolldicecontrol)
rolldicecontrol.addEventListener('click', Runcontroler)
var curentPlayer = 1;
console.log(curentPlayer)

function Runcontroler() {
    var newNumber = Math.round(Math.random() * 5) + 1
    diceimg.classList.remove('hide');
    console.log(newNumber)
    diceimg.src = `../assets/${newNumber}.png`
        // console.log(newNumber)
    if (newNumber == 1) {
        if (curentPlayer == 1) {
            scorePlayer1.textContent = 0;
            player1score.textContent = 0;
            curentPlayer = 2

        } else {
            scorePlayer2.textContent = 0
            player2score.textContent = 0;
            curentPlayer = 1
        }
    } else {
        if (curentPlayer == 1) {
            // alert('PALYER 1 WIN')

            player1score.textContent = Number(newNumber);
            scorePlayer1.textContent = Number(scorePlayer1.textContent) + Number(newNumber);

        } else if (curentPlayer == 2) {
            // alert(' PLAYER 2 LOSS ')

            player2score.textContent = Number(newNumber);
            // curentPlayer = 2
            scorePlayer2.textContent = Number(scorePlayer2.textContent) + Number(newNumber);
            // player2score.innerHTML = newNumber
        }
    }
}
// if (scorePlayer1.textContent == '20' || scorePlayer2.textContent == "20") {
//     alert(' you win ')
// }



let hold = document.getElementById('Hold');

hold.addEventListener('click', Holdon)

function Holdon() {
    console.log('hi');
    if (curentPlayer == 1) {
        curentPlayer = 2
        player1score.textContent = 0
        scorePlayer1.textContent = 0

    } else {
        player2score.textContent = 0
        scorePlayer2.textContent = 0;
        curentPlayer = 1

        if (scorePlayer2.textContent >= 10) {
            alert(' PLAYER 2 LOSS ')
        }
    }
}





// Runcontroler();

// score1.classList.remove('p')