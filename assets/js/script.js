const container = document.querySelector('.container');
const numberOfSquares = document.querySelector('#number-of-squares');
const squaresLabel = document.querySelector("#squares-label");

createGrid(container, 16, 16);

numberOfSquares.addEventListener('change', () => {
    let square = document.querySelectorAll('.container-square');
    let qtd = numberOfSquares.value;

    square.forEach((e) => {
        e.parentNode.removeChild(e);
    });

    squaresLabel.innerHTML = `${qtd} x ${qtd}`;
    createGrid(container, qtd, qtd);
});

numberOfSquares.addEventListener('input', () => {
    let qtd = numberOfSquares.value;
    squaresLabel.innerHTML = `${qtd} x ${qtd}`;
});

function createGrid(parent, rows, columns) {
    for (i=0; i < rows*columns; i++) {
        const square = document.createElement('div');
        square.classList.add('container-square');
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });
        parent.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
        parent.appendChild(square);
    }
}
