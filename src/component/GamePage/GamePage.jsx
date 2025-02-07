import React, { useState } from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'


const GamePage = () => {

  const [toScore , setToScore] = useState(0);
  const [selectNum, setSelectNum] = useState();
  const [currentDice , setCurrentDice] = useState(1);

  const gntRndmNum = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1 ) + min);

  };
   
const rollDice = () => {
    const randomNumber = gntRndmNum(1 , 6);
    
    setCurrentDice( randomNumber);

    if (selectNum === randomNumber) {
      setToScore((prev) => prev + randomNumber);
    }

    else{
      setToScore( (prev) => prev - 2 )
    }
   
};

  return (
    <MainConainer>

      <div className='top-section'>
        
        <Score toScore =  {toScore} />

        <NumberSelector
        selectNum = {selectNum}
        setSelectNum = {setSelectNum} /> 
      </div>

      <RollDice
      currentDice = {currentDice}
      rollDice = {rollDice} />
       
    </MainConainer>
  )
}

export default GamePage

const MainConainer = styled.main`
padding: 100px 200px;

.top-section{
display : flex ;
justify-content: space-between;

}
`