const container = document.querySelector('#container');
const newLine = document.createElement('br')

function getGrid(userSelection){
    for(let i=0; i<userSelection; i++){
        let row = document.createElement('div');
        for(let j=0; j<userSelection; j++){
            let div = document.createElement('div');
            div.setAttribute('class', 'square');
            row.appendChild(div)
        }
        container.appendChild(row);
    }
}


const divs = document.querySelectorAll('.squares');
divs.forEach(div => {
    div.addEventListener('click', div.classList.add('pressed'));
})