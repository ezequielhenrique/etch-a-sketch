const container = document.querySelector('.container');
const numberOfSquares = document.querySelector('#number-of-squares');
const squaresLabel = document.querySelector('#squares-label');
const colorPicker = document.querySelector('#input-color');
const buttonClear = document.querySelector('#button-clear');
const saveButton = document.querySelector('#save-button')

createGrid(container, 16, 16);

numberOfSquares.addEventListener('change', updateGrid);
buttonClear.addEventListener('click', updateGrid);

numberOfSquares.addEventListener('input', () => {
    let qtd = numberOfSquares.value;
    squaresLabel.innerHTML = `${qtd} x ${qtd}`;
});

saveButton.addEventListener('click', () => {
    html2canvas(container).then((canvas) => {
        var link = document.createElement('a');
        link.download = 'desenho.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});


function createGrid(parent, rows, columns) {
    let isDragging = false;

    for (i=0; i < rows*columns; i++) {
        const square = document.createElement('div');

        square.classList.add('container-square');
        square.addEventListener('mousedown', () => {
            isDragging = true;
        });
        square.addEventListener('mousemove', () => {
            if (isDragging) {
                square.classList.add('hover');
                square.style.backgroundColor = colorPicker.value;
            }
        });
        square.addEventListener('mouseup', () => {
            isDragging = false;
        });

        parent.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
        parent.appendChild(square);
    }
}

function updateGrid() {
    let square = document.querySelectorAll('.container-square');
    let qtd = numberOfSquares.value;

    square.forEach((e) => {
        e.parentNode.removeChild(e);
    });

    squaresLabel.innerHTML = `${qtd} x ${qtd}`;
    createGrid(container, qtd, qtd);
}
