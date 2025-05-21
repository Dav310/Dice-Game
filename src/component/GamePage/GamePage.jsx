import  { useState } from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'

const GamePage = () => {
  const [toScore, setToScore] = useState(0);
  const [selectNum, setSelectNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const gntRndmNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
   
  const rollDice = () => {
    const randomNumber = gntRndmNum(1, 6);
    
    setCurrentDice(randomNumber);

    if (selectNum === randomNumber) {
      setToScore((prev) => prev + randomNumber);
    } else {
      setToScore((prev) => prev - 2);
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-16 xl:p-24">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <Score toScore={toScore} />
        <NumberSelector selectNum={selectNum} setSelectNum={setSelectNum} /> 
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice} />
    </div>
  )
}

export default GamePage