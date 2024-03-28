# En la coleccion/lista

```javascript
import React, { useState, useEffect } from "react";
import DBZChar from "../layout/DBZChar";

function Characters() {
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
    <div>
      {items.map((item) => (
        <DBZChar data={item} />
      ))}
    </div>
  );
}

export default Characters;
```

# En el card/item individual

```javascript
import React from "react";

function DBZChar(props) {
  // 1. saco los datos de props a una variable más cómoda
  const data = props.data;

  // 2. escribo los datos en el elemento donde quiero que se pinten.
  return (
    <div className="container">
      <div className="img-container">
        <img src={data.image} />
      </div>
      <div className="desc-container">
        <p>{data.description}</p>
        <div className="name-container">
          <h2>{data.name}</h2>
        </div>
        <div className="prop-container">
          <div className="prop">
            <p>ki: {data.ki}</p>
          </div>
          <div className="prop">
            <p>especie: {data.race}</p>
          </div>
          <div className="prop">
            <p>Facción: {data.affiliation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DBZChar;
```
