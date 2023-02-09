const button = document.querySelector("button");
const body = document.querySelector("body");

const color=["Blue", "Orange", "Red", "Cyan", "Green", "Purple", "Aqua","Yellow","Violet","Grey"]

function colorChange(){
    const colorNumber = parseInt(Math.random() * color.length);
    body.style.backgroundColor=color[colorNumber];
};

body.style.backgroundColor="white";
button.addEventListener("click", colorChange);