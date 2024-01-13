const colors = ["red", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#d35400", "#27ae60", "#c0392b", "#f1c40f"];
const shapes = ["square", "triangle", "lefttriangle","circle","righttraingle"];

let colorchange = document.querySelector(".circlecontainer");
let shapeElement = document.querySelector(".shape");
let squareElement = document.querySelector(".square");

function changeColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorchange.style.backgroundColor = randomColor;
}

function changeShape() {
    let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeElement.className = "shape " + randomShape;
}

document.querySelector(".one").addEventListener("click", changeColor);
document.querySelector(".two").addEventListener("click", changeShape);
