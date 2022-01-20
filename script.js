'use strict';

let boardSize = 512;

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', handleClearButton);

function handleMouseover(e) {
  e.target.classList.add('orange');
}

function handleClearButton() {
  const allDivs = document.querySelectorAll('.gridItem');
  for (const div of allDivs) {
    // NOTE not sure if it's necessary to remove the event listener if i'm removing the element, but it feels right doing so
    div.removeEventListener('mouseover', handleMouseover);
    div.remove();
  }
  let sideLength;
  do {
    sideLength = Number(prompt('how many columns/rows? (1-100)', 16));
  } while (sideLength < 1 || sideLength > 100);
  drawGrid(sideLength);
}

function drawGrid(sideLength) {
  const container = document.getElementById('container');
  container.style.setProperty('--gridSize', sideLength);

  let cellPixelSize = boardSize / sideLength;
  container.style.setProperty('--cellSize', `${cellPixelSize}px`);

  for (let i = 0; i < sideLength * sideLength; i++) {
    let cell = document.createElement('div');
    cell.classList.add('gridItem');
    container.appendChild(cell);
  }

  const allDivs = document.querySelectorAll('.gridItem');
  for (const div of allDivs) {
    div.addEventListener('mouseover', handleMouseover);
  }
}

drawGrid(16);
