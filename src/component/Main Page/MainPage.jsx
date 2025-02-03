import React from 'react'
import './MainPage.css'
const MainPage = () => {
  return (
    <>
        <div className="main">
            <div className="img-section">
                <img src="./dices.png" alt="" />
            </div>
            <div className="text-section">
                <h1>DICE GAME</h1>
                <div className='play-btn'>
                    <button>Play Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainPage