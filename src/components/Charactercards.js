import React from "react";
import CharacterItem from "./CharacterItems";

const Charactercards = ({ items, query }) => {
  return (
    <section className="cards">
      {items.filter((character)=>{
        return character.name.toLowerCase().includes(query.toLowerCase())
      }).map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default Charactercards;
