import styled from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar({ searchCharacter }) {
  const allCharacters = useSelector((state) => state.allCharacters);
  const [character, setCharacter] = useState('');

  const characterChange = (e) => {
    const inputCharacter = e.target.value;
    setCharacter(inputCharacter);
  };

  useEffect(() => {
    searchCharacter(character);
  }, [allCharacters]);

  return (
    <div className={styled.container}>
      <input
        className={styled.input}
        type="search"
        placeholder="Find a character..."
        value={character}
        onChange={characterChange}
      />
    </div>
  );
}
