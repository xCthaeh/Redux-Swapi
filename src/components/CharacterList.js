import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        console.log(character);
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
