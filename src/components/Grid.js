import React from 'react'

export default function Grid() {

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



    return (
        <div 
            style={Styles.gridContainerStyle}
            className="flex flex-col items-center justify-center"
        >
            <div id="sketchpad"
                className = 'grid mt-4 h-full w-full'
                style={Styles.gridStyle}
            >
            </div>
            <button 
                style = {Styles.clearBtnStyle}
                id = "clearBtn"
                className = "mt-4 h-12 w-28 border-none rounded-xl text-2xl text-red-700 "
            >
                    Clear
            </button>
        </div>
    )
}
