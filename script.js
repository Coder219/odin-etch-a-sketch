let gridExists = false;
let paintColor = 'black';
let canvasColor = 'white';
let cursorColor = 'darkgrey';
const inputElement = document.querySelector('ul');
const rowInput = document.querySelector('.row-input');
const columnInput = document.querySelector('.column-input');
const loadGridButton = document.querySelector('.load-button');
const clearGridButton = document.querySelector('.erase-button');
const colorButtons = document.querySelectorAll('.colors button');
function createBox(row,column,rowContainer){
    const box = document.createElement("div");
    box.className += ` row${row} column${column} box`;
    box.style.backgroundColor = canvasColor;
    rowContainer.appendChild(box);
    box.addEventListener('mouseover', (event) => {
    if (!box.classList.contains('painted')) box.style.backgroundColor = cursorColor;
    if (event.buttons === 1){
        box.style.backgroundColor = paintColor;
        box.classList.add('painted');
        };
    });
    box.addEventListener('mouseleave', function(){if (!box.classList.contains('painted')) box.style.backgroundColor = canvasColor;});
}
function createGrid(width,height){
    gridExists = true;
    const gridContainer = document.createElement("div");
    gridContainer.className += 'grid container';
    document.body.appendChild(gridContainer);
    for (let row=1; row<=height; row++){
        rowContainer = document.createElement("div");
        gridContainer.appendChild(rowContainer);
        rowContainer.className += ' row container';
        for(let column=1; column<=width; column ++) createBox(row,column,rowContainer);    
    };
}
function clearGrid(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.classList.remove('painted');
        box.style.backgroundColor = canvasColor;
    });
}
loadGridButton.addEventListener('click', function() {
    if (!gridExists) createGrid(rowInput.value,columnInput.value);
    loadGridButton.remove();
    inputElement.remove();
});
clearGridButton.addEventListener('click', function() {clearGrid()});
colorButtons.forEach(function(button){button.addEventListener('click', function(event){paintColor = button.id});});