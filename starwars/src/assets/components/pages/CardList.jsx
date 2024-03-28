import React, { useState } from "react";
import Card from "../layout/Card";
import "../../styles/card.css";

function CardList() {

  const luke = ` {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male"
    }`;
  const beru = `
{
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "47BBY",
        "gender": "female"
    }`;
  const chewbacca = `{
        "name": "Chewbacca",
        "height": "228",
        "mass": "112",
        "hair_color": "brown",
        "skin_color": "unknown",
        "eye_color": "blue",
        "birth_year": "200BBY",
        "gender": "male"
    }`;
  const roosTarpals = `{
        "name": "Roos Tarpals",
        "height": "224",
        "mass": "82",
        "hair_color": "none",
        "skin_color": "grey",
        "eye_color": "orange",
        "birth_year": "unknown",
        "gender": "male"
    }`;
  const owenLars = `{
        "name": "Owen Lars",
        "height": "178",
        "mass": "120",
        "hair_color": "brown, grey",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "52BBY",
        "gender": "male"
    }`;
  const jangoFett = `{
        "name": "Jango Fett",
        "height": "183",
        "mass": "79",
        "hair_color": "black",
        "skin_color": "tan",
        "eye_color": "brown",
        "birth_year": "66BBY",
        "gender": "male"
    }`;
  const finisValorum = `{
        "name": "Finis Valorum",
        "height": "170",
        "mass": "unknown",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "91BBY",
        "gender": "male"
    }`;

  const dataLuke = JSON.parse(luke);
  const dataBeru = JSON.parse(beru);
  const dataChewbacca = JSON.parse(chewbacca);
  const dataRoosTarpals = JSON.parse(roosTarpals);
  const dataOwenLars = JSON.parse(owenLars);
  const datajangoFett = JSON.parse(jangoFett);
  const datafinisValorum = JSON.parse(finisValorum);

  const actores = [ /* pasamos los nombres con el formato JSON */
    dataLuke,
    dataBeru,
    dataChewbacca,
    dataRoosTarpals,
    dataOwenLars,
    datajangoFett,
    datafinisValorum,
  ];

  const personajes = [
    "/img/luke.png",
    "/img/beru.jpg",
    "/img/chewbacca.jpg",
    "/img/roosTarpals.jpg",
    "/img/owenLars.jpg",
    "/img/jangoFett.jpg",
    "/img/finisValorum.jpg",
  ];

  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="starwar">
        <div className="img-starwar-container">
        <Card data={actores[index]} image={personajes[index]} /> { /* nos llama a los dos arrays y a la posicion del array. Y va recorriendo el array con el indice en la función del botón */}
        </div>

        <div className="boton-starwar-container">
          <button
            className="boton-starwar"
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
              } else {
                setIndex(personajes.length - 1);
              }
            }}
          >
            anterior{" "}
          </button>
          <button
            className="boton-starwar"
            onClick={() => {
              if (index < personajes.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
              console.log(index);
            }}
          >
            siguiente{" "}
          </button>
        </div>
      </div>
    </>
  );
  /*     console.log(dataLuke, dataBeru, dataChewbacca, roosTarpals, owenLars, jangoFett, finisValorum)
    return (
        <div className='list-char'>
            <Card data={dataLuke} image={'/img/luke.png'} />
            <Card data={dataBeru} image={'/img/beru.jpg'} />
            <Card data={dataChewbacca} image={'/img/chewbacca.jpg'} />
            <Card data={dataRoosTarpals} image={'/img/roosTarpals.jpg'} />
            <Card data={dataOwenLars} image={'/img/owenLars.jpg'} />
            <Card data={datajangoFett} image={'/img/jangoFett.jpg'} />
            <Card data={datafinisValorum} image={'/img/finisValorum.jpg'} />
        </div>
    ) */


  /* HOOK para guardar la posicion actual del array,
            y la funcion que cambia de foto */
  /*   const [index, setIndex] = useState(0); */
  

}

export default CardList;
