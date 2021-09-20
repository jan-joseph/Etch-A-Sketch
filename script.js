const sketchpad = document.querySelector('.sketchpad');
const slider = document.querySelector('#slider')
const clearBtn = document.querySelector('.clearBtn')

// Generates an n x n grid based on the value from Slider. Autmatically updates when the slider value Changes
function gridPixelCreator(e) {
    document.getElementById('range-value').innerHTML = e;
    let gridSize = e*e;
    // Clear the Sketchpad after Slider Change
    while (sketchpad.firstChild) {
        sketchpad.firstChild.remove()
    }
    for ( let i = 0; i < gridSize ; i++){
        const div = document.createElement('div');
        sketchpad.insertAdjacentElement('beforeend',div);
    }
    sketchpad.style.setProperty('grid-template-columns', `repeat(${+e}, 1fr)`);
    sketchpad.style.setProperty('grid-template-rows', `repeat(${+e}, 1fr)`);

    const grid = sketchpad.querySelectorAll('div');
    grid.forEach(gridPixel => gridPixel.addEventListener('click', colorGrid))
}

// RNG Coloring Function for the Grid Pixel
function colorGrid() {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}
// Clear Grid fucntion, when clear Button is clicked.
function clearGrid() {
    gridPixelCreator(slider.value);    
}
// Initializes the Grid with the default slider value pixel count
gridPixelCreator(10);
slider.addEventListener('input', () => gridPixelCreator(slider.value), false)
clearBtn.addEventListener('click',clearGrid);