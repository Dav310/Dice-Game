import React, { useState } from 'react'
import StartPage from './component/StartPage/StartPage';
import Gamepage from './component/GamePage/GamePage'

const App = () => {

  const [gameStart ,  setGameStart] =  useState(false);

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