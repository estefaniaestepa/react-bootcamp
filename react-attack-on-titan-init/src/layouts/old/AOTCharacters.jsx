import axios from "axios";
import React, { useEffect, useState } from "react";
import AOTCharacterCard from "./AOTCharacterCard";

function AOTCharacters() {
  const [name, setName] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isUsed, setUsed] = useState(false);
  useEffect(() => {
    const url = `https://api.attackontitanapi.com/characters?name=${name}`;
    //const url = `https://api.attackontitanapi.com/characters?name=armin`
    if (name && name != "") {
      axios.get(url).then((res) => {
        //console.log(res)
        if (res.data.results.length > 0) {
          const filterData = res.data.results.map((character) => ({
            id: character.id,
            name: character.name,
            age: character.age,
            img: character.img.split(".png")[0] + ".png",
            gender: character.gender,
            occupation: character.occupation,
          }));
          console.log(filterData);
          setCharacters(filterData);
        } else {
          setCharacters([]);
        }
      });
    }else{
      setCharacters([]);
    }
  }, [name]);
  return (
    <>
      <div>
        <div className="main">
          <div className="search">
            <h1>Personajes de Attack on Titan</h1>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
                setUsed(true);
                //console.log(name)
              }}
              value={name.toLowerCase()}
              placeholder="Buscar por nombre"
            />
          </div>
          <div className="card-container">
          {!isUsed && <p>Haz tu primera búsqueda</p>}
    {/*         {!isUsed ? <p>Haz tu primera búsqueda</p> : <p>Muchas gracias por utilizar la Api de los Titanes</p>} */}
            {isUsed &&
              characters.length != 0 &&
              characters.map((character) => (
                <AOTCharacterCard key={character.id} data={character} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AOTCharacters;
