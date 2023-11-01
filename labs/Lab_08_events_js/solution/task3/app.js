const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorBox = document.getElementById('square');
let color;

function updateColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;
    color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = color;
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);


const createButton = document.getElementById("inputButton");
const block = document.getElementById("block");
const maxBlock = 15;
let countBlock = 0;

createButton.addEventListener("click",()=>{
    if(countBlock>=maxBlock){
        document.getElementById((countBlock-maxBlock).toString()).style.backgroundColor = color;
        countBlock++;
        return;
    }
    const newBlock = document.createElement("div");
    newBlock.className = "newBlock";
    newBlock.id = countBlock.toString();
    newBlock.style.padding = '5%';
    newBlock.style.backgroundColor = color;
    block.appendChild(newBlock);
    countBlock++;
});