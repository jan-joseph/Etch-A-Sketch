import React from 'react'

export default function Grid() {
    const gridContainerStyle = {
        width: '70vh',
        height: '70vh'
    }

    const gridStyle = {
        boxShadow: '3px 3px 6px #d9d9d9, -3px -3px 6px #ffffff'
    }

    const clearBtnStyle = {
        // background: 'linear-gradient(145deg, #ececec, #f1f1f1)',
        boxShadow:  '4px 4px 4px #d8d8d8, -4px -4px 4px #ffffff',
        '&:hover': {
            textDecoration: 'underline',
       },
    }
    return (
        <div 
            style={gridContainerStyle}
            className="flex flex-col items-center justify-center"
        >
            <div id="sketchpad"
                className = 'grid mt-4 h-full w-full'
                style={gridStyle}
            >
            </div>
            <button 
                id = "clearBtn"
                style = {clearBtnStyle}
                className = "mt-4 h-12 w-28 border-none rounded-xl bg-red-700 text-2xl text-white "
            >
                    Clear
            </button>
        </div>
    )
}
