import React, { useState, createContext } from "react";

export const DetailsContext = createContext();

export const DetailsProvider = (props) => {
  const [currentCharacter, setCurrentCharacter] = useState({});
  return (
    <DetailsContext.Provider value={{ currentCharacter, setCurrentCharacter }}>
      {props.children}
    </DetailsContext.Provider>
  );
};
