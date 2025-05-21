import React from 'react';

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 md:mt-16">
      <div 
        className="cursor-pointer transition-transform hover:scale-105" 
        onClick={rollDice}
      >
        <img 
          src={`/dice/dice_${currentDice}.png`} 
          alt={`Dice ${currentDice}`} 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
        />
      </div>
      <p className="text-lg sm:text-xl font-medium mt-4">Click on dice to roll</p>
    </div>
  );
};

export default RollDice;