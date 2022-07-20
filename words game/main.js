let word = "crazy";
let hided = [];
let lives = 7;
let displayInfo = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;

            for (var i = 0; i <= word.length-1; i++){
                hided.push("_");
                let displayHided = document.createElement('h1');
                displayHided.innerText = "_";
                document.getElementById("hided-word").appendChild(displayHided);
            }
            
            let displayLives = document.createElement("h2");
            displayLives.innerHTML = "You Have " + lives + " Guesses Remaining";
            document.getElementById("player-lives").appendChild(displayLives);
        }
    }
})();
displayInfo();

function UpdateInfo() {
    document.getElementById("hided-word").replaceChildren();
    document.getElementById("player-lives").replaceChildren();

    for (var i = 0; i <= hided.length-1; i++){
        let displayHided = document.createElement('h1');
        displayHided.innerText = hided[i];
        document.getElementById("hided-word").appendChild(displayHided);
    }

    let displayLives = document.createElement("h2");
    displayLives.innerHTML = "You Have " + lives + " Guesses Remaining";
    document.getElementById("player-lives").appendChild(displayLives);
}

function checkLetter(letter) {
    let displayLetter = document.createElement("h2");
    displayLetter.innerHTML = letter.value;
    document.getElementById("all-guesssed-letters").appendChild(displayLetter);

    if (word.includes(letter.value)) {
        for (let i=0; i <= word.length-1; i++){
            hided[i] = word[i] === letter.value ? letter.value : hided[i]
        }
        UpdateInfo();
    } else {
        lives--
        document.getElementById("stages").src="stages/stage"+lives+".png";
        UpdateInfo();
    }

    if (lives === 0) {
        document.getElementById("hided-word").replaceChildren();
        let displayHided = document.createElement('h1');
        displayHided.innerText = "YOU KILED THE GUY!!!";
        document.getElementById("hided-word").appendChild(displayHided);
    } else if (hided.join('') === word) {
        document.getElementById("hided-word").replaceChildren();
        let displayHided = document.createElement('h1');
        displayHided.innerText = "YOU WIN! CONGRATULATIONS!!!";
        document.getElementById("hided-word").appendChild(displayHided);

        document.getElementById("stages").src = "stages/stage8.png";
    }

    document.getElementById("letter").value = '';
}

