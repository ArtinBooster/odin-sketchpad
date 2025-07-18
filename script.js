const theScale = document.querySelector("#the-scale");
const rearrangeButton = document.querySelector(".rearrange-button");
let numberOfRows = 16;
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
}
function getRandomNumberForRGBValue() {
    // This random number will be a number from 0 to 255
    const randomNumber = Math.floor(Math.random() * (255 + 1));
    return randomNumber;
}
function makeTheSquaresBlackWhenHovered() {
    for (let i = 0; i < squares.length; i++) {
        const currentSquare = squares[i];
        currentSquare.addEventListener("mouseover", () => {
            const randomColor = `rgb(${getRandomNumberForRGBValue()}, ${getRandomNumberForRGBValue()}, ${getRandomNumberForRGBValue()})`
            currentSquare.style.backgroundColor = randomColor;
        })
    }
}
function emptyTheScale() {
    for (let a = 0; a < numberOfRows; a++) {
        const currentContainer = containers[a];
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
makeTheSquaresBlackWhenHovered();
// The scale gets reset when user clicks on "rearrangeButton"
rearrangeButton.addEventListener("click", () => {
    emptyTheScale();
    rearrange();
    fillTheScale();
    makeTheSquaresBlackWhenHovered();
})