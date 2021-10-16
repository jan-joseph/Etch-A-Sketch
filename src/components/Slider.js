import React from 'react'

export default function Slider() {
    return (
        <div className=" flex flex-col items-center mt-6">
            <p className="self-center">Select the Tile Size</p>
            <input type="range" name="Tile Size" id="slider" max="100" min="4" defaultValue="10" />
            <p id="range-value">10</p>
        </div>
    )
}
