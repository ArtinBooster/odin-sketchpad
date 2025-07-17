const containerDivs = document.querySelectorAll(".container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    containerDivs[i].appendChild(newDiv);
    }
}

const squareDivs = document.querySelectorAll(".square");

for (let i = 0; i < squareDivs.length; i++) {
    const currentSquareDiv = squareDivs[i];
    currentSquareDiv.addEventListener("mouseover", () => {
        currentSquareDiv.style.backgroundColor = "black";
    })
}