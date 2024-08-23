let gridExists = false;
const rowInput = document.querySelector('.row-input');
const columnInput = document.querySelector('.column-input');
const loadGridButton = document.querySelector('.load-button');

function createGrid(width,height){
    gridExists = true;
    const gridContainer = document.createElement("div");
    gridContainer.classList.add(`grid`);
    gridContainer.classList.add('container');
    document.body.appendChild(gridContainer);
    for (let row=1; row<=height; row++){
        rowContainer = document.createElement("div");
        gridContainer.appendChild(rowContainer);
        rowContainer.classList.add('row');
        rowContainer.classList.add('container');
        for(let column=1; column<=width; column ++){
            const box = document.createElement("div");
            box.classList.add(`row${row}`);
            box.classList.add(`column${column}`);
            box.classList.add('box');
            box.addEventListener('mouseover', function(){
                console.log(`Mouse over row${row} column${column}`);
            });
            box.style.padding = (screen.height)/height
            rowContainer.appendChild(box);
        }
    }

}



loadGridButton.addEventListener('click', function() {
    if (!gridExists) createGrid(rowInput.value,columnInput.value);
});

    