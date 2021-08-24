/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character";
    if (id !== 0) {
      url += `/${id}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (id === 0) {
          setCharacters(data.results);
        } else {
          setCharacter(data);
        }
      });
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== 0) {
      setId(Number(value));
    }
  };

  const getState = (state) => {
    switch (state) {
      case "Alive":
        return "alive";
      case "Dead":
        return "dead";
      case "unknown":
        return "unknow";
    }
  };

  return (
    <>
      <h1>Personajes</h1>
      <input type='text' value={id} onChange={handleChange} />
      {character && (
        <div className='character'>
          <img
            className='selected-img'
            src={character.image}
            alt={character.name}
          />
          <div className='character-info'>
            <label>
              {character.name} - {character.id}
            </label>
            <div className={"state " + getState(character.status)}></div>
          </div>
        </div>
      )}

      <div className='wrapper'>
        {characters &&
          characters.length > 0 &&
          characters.slice(0, 8).map((character) => (
            <div className='character' key={character.id}>
              <img src={character.image} alt={character.name} />
              <div className='character-info'>
                <label>
                  {character.name} - {character.id}
                </label>
                <div className={"state " + getState(character.status)}></div>
              </div>
            </div>
          ))}
      </div>
      <style jsx>
        {`
          .wrapper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            place-items: center;
            row-gap: 50px;
            background-color: #000;
            padding: 1rem 0.5rem;
          }
          .character-info {
            display: flex;
            align-items: center;
          }
          .character {
            display: flex;
            flex-direction: column;
            color: white;
            background-color: #000;
          }
          .state {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-left: 0.5rem;
          }

          .unknow {
            background-color: gray;
          }

          .dead {
            background-color: red;
          }

          .alive {
            background-color: green;
          }

          .selected-img {
            width: 300px;
          }
        `}
      </style>
    </>
  );
};

export default Characters;
