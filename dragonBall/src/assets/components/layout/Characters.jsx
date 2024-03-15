import React, { useState, useEffect } from "react";
import DBZChar from "../layout/DBZChar";

function Characters(){
  // 1. defino un almacen
  const [items, setItems] = useState([]);

  // 2. me conecto a la api con fetch
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((res) => res.json())
      .then(
        (data) => {
          setItems(data.items);
          console.log(items);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  //3. mapeo los resultados para pintar tajetas
  return (
    <>
    <div className="title">
    <h2>The Dragon Ball API</h2>
    </div>
    <div className="charactersList">
      {items.map((item) => (
        <DBZChar data={item} />
      ))}
    </div></>
  );
}

export default Characters;
