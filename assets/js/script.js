const container = document.querySelector('.container');

for (i=0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('container-square');
    square.addEventListener('mouseover', () => {
        square.classList.add('hover');
    });
    container.appendChild(square)
}
