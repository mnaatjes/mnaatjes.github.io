// Random Guessing Game
let rand_num    = Math.floor(Math.random() * 100 + 1);
let guess_num   = 0;

function getGuess() {
    let user_guess  = document.getElementById('guessField').value;
    let outcome     = false;
    let msg_guess   = "";
    var msg_turns   = "Turns Left!";
    var msg_final   = "";
    guess_num       += 1;

    // turn color
    if (guess_num <= 3) {
        document.getElementById('guessNumber').style.backgroundColor = "mediumseagreen";
    } else if (guess_num <= 6) {
        document.getElementById('guessNumber').style.backgroundColor = "yellow";
        document.getElementById('guessNumber').style.color = "black";
    } else if (guess_num > 6) {
        document.getElementById('guessNumber').style.backgroundColor = "salmon";
        document.getElementById('guessNumber').style.color = "white";
    }

    if (user_guess == rand_num && guess_num <= 10) {
        outcome     = true;
        msg_final   = "YOU WIN!";
        // close form
        document.getElementById('formGameplay').style.display = "none";
        document.getElementById('output').style.display = "none";
        document.getElementById('final').innerHTML = msg_final;
        document.getElementById('number').innerHTML = rand_num;
        document.getElementById('formEndgame').style.display = "block";

    } else if (user_guess != rand_num && guess_num <= 10) {
        // change grammar
        if (guess_num == 9) {
            msg_turns = "Turn Left!";
        }
        // display output for guesses left
        document.getElementById('guessNumber').style.display = "block";
        document.getElementById('guessNumber').innerHTML = (10 - guess_num) + ' ' + msg_turns;

        // indicate low or high
        if (user_guess > rand_num) {
            msg_guess = " Too High!";
        } else if (user_guess < rand_num) {
            msg_guess = "Too Low!";
        }
        // display low or high
        document.getElementById('guessSize').style.display = "block";
        document.getElementById('guessSize').innerHTML = msg_guess;

        // game over
        if (guess_num == 10) {
            msg_final = "GAME OVER!"
            document.getElementById('formGameplay').style.display = "none";
            document.getElementById('output').style.display = "none";
            document.getElementById('final').innerHTML = msg_final;
            document.getElementById('number').innerHTML = rand_num;
            document.getElementById('formEndgame').style.display = "block";
        }
    }
}

function reload() {
    window.location.reload();
}

console.log(rand_num);