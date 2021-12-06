import React, { useContext } from "react";
import { DetailsContext } from "../context/detailContext";

export const CharacterDetails = () => {
  const { currentCharacter } = useContext(DetailsContext);
  return (
    <div className="suggestions">
      <div>name: &nbsp; {currentCharacter.name}</div>
      <div>height: &nbsp; {currentCharacter.height}</div>
      <div>mass: &nbsp; {currentCharacter.mass}</div>
      <div>hair color: &nbsp; {currentCharacter.hair_color}</div>
      <div>skin color: &nbsp; {currentCharacter.skin_color}</div>
      <div>eye color: &nbsp; {currentCharacter.eye_color}</div>
      <div>birth year: &nbsp; {currentCharacter.birth_year}</div>
      <div>gender: &nbsp; {currentCharacter.gender}</div>
    </div>
  );
};
