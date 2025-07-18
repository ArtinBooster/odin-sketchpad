const theScale = document.querySelector("#the-scale");
const rearrangeButton = document.querySelector(".rearrange-button");
let numberOfRows = 16;
let squaresInfo = [];
let containers;
let squares;

function fillTheScale() {
    for (let a = 0; a < numberOfRows; a++) {
        // New containers get created as many as "numberOfRows"
        const newContainer = document.createElement("div");
        newContainer.classList.add("container");
        for (let b = 0; b < numberOfRows; b++) {
            // New squares get created as many as "numberOfRows"
            const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            // The new square gets appended to the new container
            newContainer.appendChild(newSquare);
        }
        // The new container gets appended to the body tag in "index.HTML"
        theScale.appendChild(newContainer);
    }
    containers = document.querySelectorAll(".container");
    squares = document.querySelectorAll(".square");
    // "Squares" gets converted from a NodeList to an Array
    squares = Array.from(squares);
}
function updateSquaresInfo() {
    for (let i = 0; i < squares.length; i++) {
        squaresInfo[i] = {timesGotTouched: 0};
    }
}
function getRandomNumberForRGBValue() {
    // This random number will be a number from 0 to 255
    const randomNumber = Math.floor(Math.random() * (255 + 1));
    return randomNumber;
}
function paintTheSquaresWhenHovered() {
    for (let i = 0; i < squares.length; i++) {
        const currentSquare = squares[i];
        const currentSquareInfo = squaresInfo[i];
        currentSquare.addEventListener("mouseover", () => {
            currentSquareInfo.timesGotTouched += 1;
            // The first time a square gets hovered over, it gets a random background color
            if (currentSquareInfo.timesGotTouched == 1) {
                const randomColor = `rgb(${getRandomNumberForRGBValue()}, ${getRandomNumberForRGBValue()}, ${getRandomNumberForRGBValue()})`
                currentSquare.style.backgroundColor = randomColor;
            }
            // Every time a square gets hovered over, it gets clearer. (It will be completely clear after 10th times.)
            if (currentSquareInfo.timesGotTouched <= 10) {
                const newOpacityPercentage = `${currentSquareInfo.timesGotTouched * 10}%`;
                currentSquare.style.opacity = newOpacityPercentage;
            }
        })
    }
}
function emptyTheScale() {
    for (let i = 0; i < numberOfRows; i++) {
        const currentContainer = containers[i];
        theScale.removeChild(currentContainer);
    }
}
function getTheNewNumberOfRows() {
    const userAnswer = parseInt(prompt("How many rows do you want the scale to have? (Between 1 and 100)", "1"));
    if (
        userAnswer != NaN &&
        userAnswer >= 1 &&
        userAnswer <= 100
    ) {
        return userAnswer;
    } else {
        alert("The given input wasn't suitable. Please try again.");
        getTheNewNumberOfRows();
    }
}
function rearrange() {
    numberOfRows = getTheNewNumberOfRows();
}

// The scale gets filled with the default "numberOfRows"
fillTheScale();
updateSquaresInfo();
paintTheSquaresWhenHovered();
// The scale gets reset when user clicks on "rearrangeButton"
rearrangeButton.addEventListener("click", () => {
    emptyTheScale();
    rearrange();
    fillTheScale();
    updateSquaresInfo();
    paintTheSquaresWhenHovered();
})