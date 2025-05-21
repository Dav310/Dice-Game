import React, { useState } from 'react';
import StartPage from './component/StartPage/StartPage';
import GamePage from './component/GamePage/GamePage';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {isGameStarted ? <GamePage /> : <StartPage toggle={toggleGamePlay} />}
      
      {isGameStarted && (
        <div className="flex justify-center mt-4 mb-8">
          <button 
            onClick={toggleGamePlay}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded font-medium transition-colors"
          >
            Back to Start
          </button>
        </div>
      )}
    </div>
  );
};

export default App;