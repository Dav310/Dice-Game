import React from 'react';

const StartPage = ({ toggle }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-6 md:gap-12 lg:gap-16">
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="./dices.png" 
          alt="Dice" 
          className="w-3/4 max-w-sm md:max-w-md"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">DICE GAME</h1>
        <div className="flex justify-center md:justify-end mt-6">
          <button 
            onClick={toggle} 
            className="bg-black hover:bg-gray-800 text-white py-2 px-6 rounded text-lg font-medium transition-colors"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;