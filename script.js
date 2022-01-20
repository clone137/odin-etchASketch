'use strict';

const clearButton = document.querySelector('.clearButton');

clearButton.addEventListener('click', function () {
  const allDivs = document.querySelectorAll('.gridItem');
  for (const div of allDivs) {
    div.remove();
  }
  let sideLength = prompt('how many columns/rows?');
  drawGrid(sideLength);
});

function drawGrid(sideLength) {
  const container = document.getElementById('container');
  container.style.setProperty('--gridSize', sideLength);

  let cellPixelSize = 512 / sideLength;
  container.style.setProperty('--cellSize', `${cellPixelSize}px`);

  for (let i = 0; i < sideLength * sideLength; i++) {
    let cell = document.createElement('div');
    // cell.innerText = i + 1;
    cell.classList.add('gridItem');
    container.appendChild(cell);
  }

  const allDivs = document.querySelectorAll('.gridItem');
  for (const div of allDivs) {
    div.addEventListener('mouseover', function (e) {
      e.target.classList.add('orange');
    });
  }
}

drawGrid(16);
