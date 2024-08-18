import { questions } from "../service/gameService.js";
import { navigate } from "../router.js";
import gameController from "../controler/gameController.js";
import raceService from "../service/raceService.js";
import { getCountryImg } from "../service/chooseCountryService.js";

let currentQuestion = 0;
const maxQuestions = questions.length - 1;
let quizzContainer;
let currentTimer;

let firstPlace = false;
let secondPlace = false;
let thirdPlace = false;
let trash = false;


sessionStorage.setItem("result", "");

let hasAnswered = false;
let botInterval;
let lightInterval;
const margin = 60;
let counter;

function getFirstPlace() {
    return firstPlace
}
function getSecondPlace() {
    return secondPlace
}
function getThirdPlace() {
    return thirdPlace
}
function getTrash() {
    return trash
}

function setFirstPlace(value) {
    firstPlace = value;
}

function setSecondPlace(value) {
    secondPlace = value;
}

function setThirdPlace(value) {
    thirdPlace = value;
}

function setTrash(value) {
    trash = value;
}

console.log(sessionStorage.getItem("country"));
console.log(sessionStorage.getItem("playerName"));

const IMG_BASE_SRC = "../";

function render() {

    const container = document.getElementById("olympicContainer");

    container.innerHTML = "";

    const olympicContainer = document.createElement("div");
    olympicContainer.setAttribute("id", "olympicContainer");

    container.appendChild(olympicContainer);

    quizzContainer = document.createElement("div");
    quizzContainer.setAttribute("id", "quizzContainer");
    olympicContainer.appendChild(quizzContainer);


    const raceContainer = document.createElement("div");
    raceContainer.setAttribute("id", "raceContainer");
    olympicContainer.appendChild(raceContainer);

    const player1 = document.createElement("img");
    player1.setAttribute("id", "player1");
    player1.setAttribute("src", getCountryImg(sessionStorage.getItem("country")));
    raceContainer.appendChild(player1)

    const player2 = document.createElement("img");
    player2.setAttribute("id", "player2");
    player2.setAttribute("src", getCountryImg("ua"));
    raceContainer.appendChild(player2)

    const player3 = document.createElement("img");
    player3.setAttribute("id", "player3");
    player3.setAttribute("src", getCountryImg("gt"));
    raceContainer.appendChild(player3)

    const player4 = document.createElement("img");
    player4.setAttribute("id", "player4");
    player4.setAttribute("src", getCountryImg("ro"));
    raceContainer.appendChild(player4);

    const timer = document.createElement("h1");

    timer.setAttribute("id", "timer");
    timer.textContent = questions[currentQuestion].time;
    timer.style.fontSize = "48px";
    timer.style.textAlign = "center";
    timer.style.position = "absolute";
    timer.style.top = "0";
    timer.style.left = "50%";
    timer.style.transform = "translateX(-50%)";


    container.appendChild(timer);

    makeQuestionForm();


};

function calculateResult() {
    counter = 0;

    const player1pos = parseInt(getComputedStyle(document.querySelector("#player1")).left);
    const player2pos = parseInt(getComputedStyle(document.querySelector("#player2")).left);
    const player3pos = parseInt(getComputedStyle(document.querySelector("#player3")).left);
    const player4pos = parseInt(getComputedStyle(document.querySelector("#player4")).left);

    if (player1pos > player2pos) {
        counter++
    }

    if (player1pos > player3pos) {
        counter++;
    }

    if (player1pos > player4pos) {
        counter++;
    }
}

function endResult() {
    calculateResult()

    switch (counter) {
        case 3:
            sessionStorage.setItem("result", "1");
            firstPlace = true;
            break;
        case 2:
            sessionStorage.setItem("result", "2");
            secondPlace = true;
            break;
        case 1:
            sessionStorage.setItem("result", "3");
            thirdPlace = true;
            break;
        case 0:
            sessionStorage.setItem("result", "4");
            trash = true;
            break;
    }
}

function makeQuestionForm() {

    const container = document.getElementById("container");


    quizzContainer.innerHTML = "";




    const questionText = document.createElement("p");
    questionText.textContent = questions[currentQuestion].question;

    quizzContainer.appendChild(questionText);

    currentTimer = setInterval(() => {
        questions[currentQuestion].time--;
        document.getElementById("timer").textContent = questions[currentQuestion].time;

        if (questions[currentQuestion].time === 0) {
            changeQuestion();
        }

    }, 1000);

    if (questions[currentQuestion].type === "text") {
        textQuizz();
    }

    if (questions[currentQuestion].type === "image") {
        imageQuizz();
    }

    if (questions[currentQuestion].type === "jump game") {
        // BOT AI
        botInterval = setInterval(() => {

            gameController.setIsMoving2(true);
            gameController.setIsMoving3(true);
            gameController.setIsMoving4(true);

            gameController.setPoints2(5);
            gameController.setPoints3(5);
            gameController.setPoints4(5);

            switch (Math.floor(Math.random() * 2) + 1) {
                case 1:
                    raceService.checkAndMove2()
                    raceService.checkAndMove4()
                    break;
                case 2:
                    raceService.checkAndMove3()
                    break;
            }

            setTimeout(function () {
                gameController.setIsMoving2(false);
                gameController.setIsMoving3(false);
                gameController.setIsMoving4(false);
            }, 100);

        }, 1000);

        jumpGame();
        return;
    }

    if (questions[currentQuestion].type === "click game") {
        clickGame();
        return
    }

    setTimeout(function () {
        randomMove2()
    }, parseInt(Math.random() * (9000 - 1000) + 1000));
    setTimeout(function () {
        randomMove3()
    }, parseInt(Math.random() * (9000 - 1000) + 1000));
    setTimeout(function () {
        randomMove4()
    }, parseInt(Math.random() * (9000 - 1000) + 1000));
}

function jumpGame() {
    quizzContainer.style.backgroundImage = 'url("../js/resources/race2.jpeg")';
    const gameDescription = document.createElement("h3");
    gameDescription.textContent = "CLICK THE CAR ON THE GREEN LIGHT";

    gameDescription.style.textAlign = "center";
    gameDescription.style.position = "absolute";
    gameDescription.style.top = "12%";
    gameDescription.style.left = "50%";
    gameDescription.style.transform = "translateX(-50%)";

    const light = document.createElement("span");
    light.setAttribute("id", "light");

    light.style.textAlign = "center";
    light.style.position = "absolute";
    light.style.top = "30%";
    light.style.left = "50%";
    light.style.transform = "translateX(-50%)";


    const jumpButton = document.createElement("img");
    jumpButton.addEventListener("click", checkJump);
    jumpButton.setAttribute("src", "../js/resources/car.png")

    jumpButton.style.position = "absolute";
    jumpButton.style.top = "40%";
    jumpButton.style.left = "50%";
    jumpButton.style.transform = "translateX(-50%)";
    jumpButton.style.height = "150px";
    jumpButton.style.width = "250px";



    quizzContainer.appendChild(gameDescription);
    quizzContainer.appendChild(light);
    quizzContainer.appendChild(jumpButton);

    lightInterval = setInterval(() => {
        if (light.style.backgroundColor === "red") {
            light.style.backgroundColor = "green";
        } else {
            light.style.backgroundColor = "red";
        }
    }, 300);
}

function checkJump() {
    if (document.getElementById("light").style.backgroundColor === "red") {
        wrongAnswer();
        return;
    }

    gameController.setIsMoving1(true)
    gameController.setPoints1(5);
    raceService.checkAndMove1();


}

function clickGame() {
    const gameText = document.createElement("h3");
    gameText.textContent = "CATCH THE SWIMMER";


    gameText.style.textAlign = "center";
    gameText.style.position = "absolute";
    gameText.style.top = "12%";
    gameText.style.left = "50%";
    gameText.style.transform = "translateX(-50%)";

    const runButton = document.createElement("img");
    runButton.setAttribute("src", "../js/resources/swimmer.png")
    runButton.setAttribute("id", "runButton");

    quizzContainer.style.backgroundImage = 'url("../js/resources/pool.jpeg")';
    quizzContainer.appendChild(gameText);
    quizzContainer.appendChild(runButton);

    botInterval = setInterval(() => {

        gameController.setIsMoving2(true);
        gameController.setIsMoving3(true);
        gameController.setIsMoving4(true);

        gameController.setPoints2(5);
        gameController.setPoints3(5);
        gameController.setPoints4(5);

        switch (Math.floor(Math.random() * 2) + 1) {
            case 1:
                raceService.checkAndMove2()
                raceService.checkAndMove4()
                break;
            case 2:
                raceService.checkAndMove3()
                break;
        }

        let randY = Math.floor(Math.random() * (quizzContainer.offsetHeight - margin * 2));
        let randX = Math.floor(Math.random() * (quizzContainer.offsetWidth - margin * 2));

        runButton.style.position = "relative";
        runButton.style.top = `${randY}px`;
        runButton.style.left = `${randX}px`;

        setTimeout(function () {
            gameController.setIsMoving2(false);
            gameController.setIsMoving3(false);
            gameController.setIsMoving4(false);
        }, 100);

    }, 1000);


    runButton.addEventListener("click", () => {
        gameController.setIsMoving1(true);

        gameController.setPoints1(5);

        raceService.checkAndMove1();


        setTimeout(function () {
            gameController.setIsMoving1(false);
        }, 100);



        let randY = Math.floor(Math.random() * (quizzContainer.offsetHeight - margin * 2));
        let randX = Math.floor(Math.random() * (quizzContainer.offsetWidth - margin * 2));

        runButton.style.position = "relative";
        runButton.style.top = `${randY}px`;
        runButton.style.left = `${randX}px`;


    })
}

function textQuizz() {

    quizzContainer.style.backgroundImage = 'url("../js/resources/quizzBackground.webp")';

   // Apply background image to quizzContainer

// Create and style the clue image
const clueImg = document.createElement("img");
clueImg.src = `../js/resources/${questions[currentQuestion].clue}`;
clueImg.setAttribute("id", "clueImg");
clueImg.style.width = '50%'; // Adjust width as needed
clueImg.style.height = '50%'; // Adjust height as needed
clueImg.style.objectFit = 'contain'; 
clueImg.style.display = 'block'; // Ensure block display to center with margin
clueImg.style.margin = '0 auto'; // Center horizontally
clueImg.style.marginBottom = '20px'; // Space below the image
// Append clueImg to quizzContainer
quizzContainer.appendChild(clueImg);

// Create and style the questionsDiv
const questionsDiv = document.createElement("div");
questionsDiv.setAttribute("id", "questionsDiv");
questionsDiv.style.display = 'flex';
questionsDiv.style.flexDirection = 'row'; // Align items in a row
questionsDiv.style.flexWrap = 'wrap'; // Allow wrapping of items if necessary
questionsDiv.style.justifyContent = 'center'; // Center items horizontally
questionsDiv.style.marginTop = '20px'; // Space above the questionsDiv

// Create and append response buttons and text
for (let i = 0; i < questions[currentQuestion].responses.length; i++) {
    let response = document.createElement("p");
    let responseButton = document.createElement("button");
    responseButton.setAttribute("id", i);
    
    responseButton.addEventListener("click", checkResponse, currentTimer);

    responseButton.textContent = i + 1;
    response.textContent = questions[currentQuestion].responses[i];

    response.style.margin = '0 10px'; // Horizontal spacing between responses
    responseButton.style.margin = '0 10px'; // Horizontal spacing between buttons

    // Append response and button to questionsDiv
    questionsDiv.appendChild(response);
    questionsDiv.appendChild(responseButton);
}

// Append questionsDiv to quizzContainer
quizzContainer.appendChild(questionsDiv);

}

function imageQuizz() {
    quizzContainer.style.backgroundImage = 'url("../js/resources/quizzBackground.webp")';

    // Get the quizzContainer element
// Apply styles to quizzContainer
quizzContainer.style.textAlign = 'center'; // Center images horizontally
quizzContainer.style.padding = '20px'; // Optional padding for the container

// Loop through the responses and create images
for (let i = 0; i < questions[currentQuestion].responses.length; i++) {
    let image = document.createElement("img");
    image.src = `../js/resources/${questions[currentQuestion].responses[i]}`;
    image.setAttribute("id", i);
    image.setAttribute("class", "quizzImage");
    image.style.cursor = "pointer"

    // Apply styles to the image
    image.style.display = 'inline-block'; // Align images in a row
    image.style.width = '40%'; // Adjust width as needed
    image.style.height = '40%'; // Maintain aspect ratio
    image.style.margin = '10px'; // Space between images
    image.style.objectFit = 'contain'; // Ensure image covers its area

    image.addEventListener("click", checkResponse, currentTimer);

    quizzContainer.appendChild(image);
}

}

function changeQuestion() {

    hasAnswered = false;
    clearInterval(currentTimer);
    clearInterval(botInterval);

    if (currentQuestion >= maxQuestions) {
        endResult();
        navigate("/halloffame");
        return;
    }
    currentQuestion++;

    document.getElementById("timer").textContent = questions[currentQuestion].time;

    makeQuestionForm();
}

function wrongAnswer() {


    const container = document.getElementById("olympicContainer");

    quizzContainer.innerHTML = "";

    document.getElementById("timer").textContent = questions[currentQuestion].time;



    const youSuck = document.createElement("img");
    youSuck.setAttribute("src", "../js/resources/MEKIE ALWAYS LOSES, NOW SO DO YOU.jpg")

    youSuck.style.objectFit = 'cover'; 


    container.appendChild(timer);
    quizzContainer.appendChild(youSuck);
}

function checkResponse(currentTimer) {
    const userResponse = event.target.id;
    if (userResponse == questions[currentQuestion].correctResponse && hasAnswered === false) {
        gameController.setIsMoving1(true)
        switch (questions[currentQuestion].time) {
            case 0:
            case 1:
                gameController.setPoints1(4)
                raceService.checkAndMove1();
                break;
            case 2:
            case 3:
            case 4:
                gameController.setPoints1(5)
                raceService.checkAndMove1();
                break;
            case 5:
            case 6:
            case 7:
                gameController.setPoints1(7)
                raceService.checkAndMove1();
                break;
            case 8:
            case 9:
                gameController.setPoints1(8)
                raceService.checkAndMove1();
                break;
            case 10:
                gameController.setPoints1(10)
                raceService.checkAndMove1();
                break;
        }
        setTimeout(function () {
            gameController.setIsMoving1(false);
        }, 300);
    } else {
        gameController.setIsMoving1(false);
        if (hasAnswered === false) {
            wrongAnswer();
        }
    }
    hasAnswered = true

}

function randomMove2() {
    gameController.setIsMoving2(true)
    switch (questions[currentQuestion].time) {
        case 0:
        case 1:
            gameController.setPoints2(4)
            raceService.checkAndMove2();
            break;
        case 2:
        case 3:
            break;
        case 4:
            gameController.setPoints2(5)
            raceService.checkAndMove2();
            break;
        case 5:
            break;
        case 6:
        case 7:
            gameController.setPoints2(7)
            raceService.checkAndMove2();
            break;
        case 8:
        case 9:
            gameController.setPoints2(8)
            raceService.checkAndMove2();
            break;
        case 10:
            gameController.setPoints2(10)
            raceService.checkAndMove2();
            break;
    }
    setTimeout(function () {
        gameController.setIsMoving2(false);
    }, 300);
}

function randomMove3() {
    gameController.setIsMoving3(true)
    switch (questions[currentQuestion].time) {
        case 0:
        case 1:
            gameController.setPoints3(4)
            raceService.checkAndMove3();
            break;
        case 2:
        case 3:
            break;
        case 4:
            gameController.setPoints3(5)
            raceService.checkAndMove3();
            break;
        case 5:
            break;
        case 6:
        case 7:
            gameController.setPoints3(7)
            raceService.checkAndMove3();
            break;
        case 8:
        case 9:
            gameController.setPoints3(8)
            raceService.checkAndMove3();
            break;
        case 10:
            gameController.setPoints3(10)
            raceService.checkAndMove3();
            break;
    }
    setTimeout(function () {
        gameController.setIsMoving3(false);
    }, 300);
}
function randomMove4() {
    gameController.setIsMoving4(true)
    switch (questions[currentQuestion].time) {
        case 0:
        case 1:
            gameController.setPoints4(4)
            raceService.checkAndMove4();
            break;
        case 2:
        case 3:
            break;
        case 4:
            gameController.setPoints4(5)
            raceService.checkAndMove4();
            break;
        case 5:
            break;
        case 6:
        case 7:
            gameController.setPoints4(7)
            raceService.checkAndMove4();
            break;
        case 8:
        case 9:
            gameController.setPoints4(8)
            raceService.checkAndMove4();
            break;
        case 10:
            gameController.setPoints4(10)
            raceService.checkAndMove4();
            break;
    }
    setTimeout(function () {
        gameController.setIsMoving4(false);
    }, 300);
}
export default { render, getFirstPlace, getSecondPlace, getThirdPlace, getTrash, setFirstPlace, setSecondPlace, setThirdPlace, setTrash };



