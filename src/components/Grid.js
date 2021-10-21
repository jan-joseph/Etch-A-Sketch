import React, { useEffect } from 'react'

export default function Grid(props) {
    const Styles = {
        gridContainerStyle : {
            width: '70vh',
            height: '70vh'
        },
        gridStyle : {
            boxShadow: '3px 3px 6px #d9d9d9, -3px -3px 6px #ffffff'
        },
        clearBtnStyle : {
            background: 'linear-gradient(145deg, #ececec, #f1f1f1)',
            boxShadow:  '4px 4px 4px #d8d8d8, -4px -4px 4px #ffffff',  
        }
    }


    function gridPixelCreator(e) {
        const sketchpad = document.getElementById('sketchpad');

        // document.getElementById('range-value').innerHTML = e;
        let gridSize = e*e;
        // Clear the Sketchpad after Slider Change
        console.log(sketchpad);
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

    // To run the Pixel Creator After every re-render
    useEffect(() => {
        gridPixelCreator(props.sliderValue)
    },[])

    
    // RNG Coloring Function for the Grid Pixel
    function colorGrid() {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    return (
        <div 
            style={Styles.gridContainerStyle}
            className="flex flex-col items-center justify-center"
        >
            <div 
                id="sketchpad"
                className = 'grid mt-4 h-full w-full'
                style={Styles.gridStyle}
            >
            </div>
            {/* <button 
                style = {Styles.clearBtnStyle}
                id = "clearBtn"
                className = "mt-4 h-12 w-28 border-none rounded-xl text-2xl text-red-700 "
            >
                    Clear
            </button> */}
        </div>
    )
}
