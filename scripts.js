const container = document.querySelector('#container');
const button = document.querySelector('button')
const width = container.offsetWidth;


button.addEventListener('click', getCustomGrid)

function deleteOldGrid(){
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function getCustomGrid(){
    let userSelection = 0;
    do{
        userSelection = parseInt(window.prompt('Enter the number of squares (max. 100): '));
    }while (userSelection < 0 || userSelection > 100);
    deleteOldGrid();
    getGrid(userSelection);
}


function pressedSquare(e){
    this.classList.toggle('pressed');
}


function getGrid(userSelection=16){
    squareSize = width / userSelection;
    for(let i=0; i<userSelection; i++){
        let row = document.createElement('div');
        for(let j=0; j<userSelection; j++){
            let div = document.createElement('div');
            div.setAttribute('style', `border:1px solid black; width:${squareSize}px; height:${squareSize}px`);
            div.addEventListener('click', pressedSquare)
            row.appendChild(div)
        }
        container.appendChild(row);
    }
}


getGrid();