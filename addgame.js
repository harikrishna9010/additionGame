let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumber.textContent = Math.ceil(firstRandomNumber);
    secondNumber.textContent = Math.ceil(secondRandomNumber);
    gameResult.textContent = "";
    userInput.value = "";
}
restartGame();


function checkButton() {
    let firstRandomInteger = parseInt(firstNumber.textContent);
    let secondRandomInteger = parseInt(secondNumber.textContent);

    let sumOfRandomNumbers = firstRandomInteger + secondRandomInteger;
    let userEnteredInput = parseInt(userInput.value);

    console.log(userEnteredInput)
    
    if (userInput.value === "") {
        alert("Enter Sum Of The Two Numbers");
    } else { 
        if (sumOfRandomNumbers === userEnteredInput) {
            gameResult.textContent = successMessage;
            gameResult.style.backgroundColor = "#028a0f";
        } else {
            gameResult.textContent = tryAgainMessage;
            gameResult.style.backgroundColor = "#1e217c";
        }
    }
}