function rangeSlide(e) {

    document.getElementById('range-value').innerHTML = e;
    // const div = document.createElement('div');
    let gridSize = e*e;
    while (sketchpad.firstChild) {
        sketchpad.firstChild.remove()
    }
    console.log(gridSize);
    for ( let i = 0; i < gridSize ; i++){
        const div = document.createElement('div');
        console.log(i);
        // div.id = `div-${i}`;
        // div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        sketchpad.insertAdjacentElement('beforeend',div);
        console.log(sketchpad);
    }


    // sketchpad.style.cssText = 'gridTemplateColumns:grid-template-columns:repeat(`${+e}`,1fr);';
    sketchpad.style.setProperty('grid-template-columns', `repeat(${+e}, 1fr)`);
    sketchpad.style.setProperty('grid-template-rows', `repeat(${+e}, 1fr)`);
    console.log(sketchpad);

    const grid = sketchpad.querySelectorAll('div');
    grid.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid))
}

function colorGrid() {
    console.log(this);
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}
const sketchpad = document.querySelector('.sketchpad');
rangeSlide(10);