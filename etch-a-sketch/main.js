function createGrid() {
    // get the idems from the DOM
    const container = document.getElementById('gridContainer');
    const gridSize = (document.getElementById('gridSize').value)

    //get rid of old grid
    container.innerHTML = '';

    //resest the css grid layout for the new grid size
    container.style["grid-template-columns"] = `repeat(${gridSize}, 1fr)`;
    container.style["grid-template-rows"] = `repeat(${gridSize}, 1fr)`;

    //generate the right amount of divs for the new grid
    for (let i = 0; i < gridSize ** 2; i++) {
      const newSquare = document.createElement('div')
      newSquare.setAttribute('class', "divGrid")
      container.appendChild(newSquare)

      //add event listener for the new divs
      newSquare.addEventListener('mouseover', function (event) {
          const colorChoice = document.getElementById('colorChoice');
          event.target.style.background = colorChoice.value;
      });
    }
}

createGrid();
