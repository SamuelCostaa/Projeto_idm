import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  return (
    <GameContext.Provider value={{ history, setHistory }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };