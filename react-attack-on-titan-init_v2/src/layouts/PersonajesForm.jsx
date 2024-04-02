import { useEffect, useState } from "react";
import PersonajesCard from "./PersonajesCard";
import axios from "axios";

const PersonajesForm = () => {
  const [personajes, setPersonajes] = useState([]);
  const [actualizar, setActualizar] = useState(false);

  const url = "https://node-tickets-alpha.vercel.app";

  useEffect(() => {
    // const url = "https://test-vercel-20240323.vercel.app/personajes";
    axios.get(`${url}/personajes`).then((res) => {
      // console.log(res.data.data);
      /* const data = res.data.data.map((character) => {
        name: character.name,
        faction: character.faction,
        profession: character.profession,
        race: character.race
      }); */
      // res.data.data.forEach((character) => {
      //   // Le metemos un forEach porque la res es un array de objetos que hay que iterar. Se puede usar también un for of.
      //   setPersonajes([...personajes, character]);
      // });
      setPersonajes(res.data.data);
    });
  }, [actualizar]); // Entre esos corchetes, no metemos nada que mueva el useEffect, porque queremos que se cargue de forma dinámica.

  // Esta función va a gestionar el botón "Guardar"
  const submitForm = (event) => {
    event.preventDefault(); // Eso para decirle que nos deje manejar, que no haga nada por defecto.
    // console.log(event.target[0].value);
    const character = {
      name: event.target[0].value,
      faction: event.target[1].value,
      profession: event.target[2].value,
      race: event.target[3].value,
    };

    axios
      .post(`${url}/personajes`, character)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setPersonajes([...personajes, character]); // Operador de propagación para guardar los personajes creados + el nuevo personaje.
    document.querySelectorAll(".char-form-input").forEach((input) => {
      input.value = ""; // Después recorre los inputs para vaciarlos.
    });
    setActualizar(true);
  };

  useEffect(() => {
    console.log(personajes);
  }, [personajes]);

  // Crear el formulario
  return (
    <>
      <form
        onSubmit={submitForm}
        /* Le decimos al formulario que apunte a la función que gestionará el botón. Cada vez que le demos al botón, pasará lo que tenemos puesto dentre de la función */
        className="char-form"
      >
        <input
          type="text"
          className="char-form-input"
          placeholder="Nombre"
          name="name"
        />
        <input
          type="text"
          className="char-form-input"
          placeholder="Facción"
          name="faction"
        />
        <input
          type="text"
          className="char-form-input"
          placeholder="Profesión"
          name="profession"
        />
        <input
          type="text"
          className="char-form-input"
          placeholder="Raza"
          name="race"
        />
        <button type="submit">Guardar</button>
      </form>

      {personajes.length > 0 ? ( // "personajes.length > 0 &&" para que se vaya creando la table solo si tenemos por lo menos un personaje creado. Sino la table no será visible.
        <table className="char-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Facción</th>
              <th>Profesión</th>
              <th>Raza</th>
            </tr>
          </thead>
          <tbody>
            {personajes.map(
              (
                personaje //Si ponemos una llave en vez de la útlima paréntesis, se esperará un return. Ponemos el <PersonajesCard /> de forma implicita con unos paréntesis.
              ) => (
                <PersonajesCard key={personaje.name} data={personaje} />
              )
            )}
            {/*También valdría esto:
              {personajes.map((personaje) => {
              return <PersonajesCard key={personaje.name} data={personaje} />;
              })}*/}
          </tbody>
        </table>
      ) : (
        <div className="no-char">Crea tu personaje de rol...</div>
      )}
    </>
  );
};

export default PersonajesForm;
