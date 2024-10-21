let userChoice;
let pcChoice;
let userWins = 0;
let pcWins = 0;

const imgPath = {
    kivi: "./kuva/kivit.png",
    paperi: "./kuva/paperit.png",
    sakset: "./kuva/saksett.png"
};

const userImgElement = document.getElementById('userImg');
const pcImgElement = document.getElementById('pcImg');
const userWinsElement = document.getElementById('userWins');
const pcWinsElement = document.getElementById('pcWins');

function getRandomChoice() {
    const choices = ["kivi", "paperi", "sakset"];
    return choices[Math.floor(Math.random() * 3)];
}

function updateResults() {
    if (userChoice === pcChoice) {
        alert("Tasapeli, pelaa uudestaan!");
    } else if (userWinsConditions()) {
        userWins++;
        userWinsElement.textContent = userWins;
    } else {
        pcWins++;
        pcWinsElement.textContent = pcWins;
    }
}

function userWinsConditions() {
    return (
        (userChoice === "kivi" && pcChoice === "sakset") ||
        (userChoice === "sakset" && pcChoice === "paperi") ||
        (userChoice === "paperi" && pcChoice === "kivi")
    );
}

function playRound(userSelection) {
    userChoice = userSelection;
    pcChoice = getRandomChoice();

    userImgElement.src = imgPath[userChoice];
    pcImgElement.src = imgPath[pcChoice];

    updateResults();
}

document.getElementById('kiviBut').addEventListener('click', function() {
    playRound('kivi');
});

document.getElementById('paperBut').addEventListener('click', function() {
    playRound('paperi');
});

document.getElementById('saksetBut').addEventListener('click', function() {
    playRound('sakset');
});