import React, { useState } from 'react'
import StartPage from './component/startPage/startPage'
import Gamepage from './component/GamePage/GamePage'

const App = () => {

  const [gameStart ,  setGameStart] =  useState(true);

  const toggleGameStart = () => {
    setGameStart( prev => !prev );
  };


  return (
    <>
      {
        gameStart ? <Gamepage/> : <StartPage toggle = {toggleGameStart}/>
      } 
    </>
  )
}

export default App