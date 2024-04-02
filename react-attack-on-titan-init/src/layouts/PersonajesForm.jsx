/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const PersonajesForm =  ({addPerfil}) => {
    const [personajes, setPersonajes] = useState([]) // le ponemos array vacío porque será una colección
    
    const submitForm = (event) => { // función que interrumpe lo que sea que tiene el navegador por defecto

  
        /* console.log(event.target[0].value); */ // imprime los datos introducidos por el usuario, básicamente los filtramos ya que devuelve mogollon de historias innecesarias
        const character = {
            name: event.target[0].value,
            faction: event.target[1].value,
            profession: event.target[2].value,
            race: event.target[3].value,
        };

/*         axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
           */
        event.preventDefault();
        setPersonajes([...personajes, character]); // le decimos que los value de character los meta dentro del array vacío de setPersonajes que es useState, desestructuramos personajes porque es un array y así evitamos que cree arrays dentro de arrays y metemos character que es lo que contiene los datos que ha introducido el usuario
        document.querySelectorAll('.char-form-input').forEach((input) => {  // le decimos que haga un recorrido por todos los campos y los deje vacíos una vez se han guardado los datos en useState
            input.value = " ";
        });
        addPerfil(personajes)
    };

    useEffect(() => {
        console.log(personajes)
    }, [personajes])


  return (
    <>
        <form onSubmit={submitForm} className="char-form">
            <input type="text" className="char-form-input" placeholder="Nombre" name="name"/> {/* name= sale del modelo de datos de la api */}
            <input type="text" className="char-form-input" placeholder="Facción" name="faction"/>
            <input type="text" className="char-form-input" placeholder="Profesión" name="profession"/>
            <input type="text" className="char-form-input" placeholder="Raza" name="race"/>
            <button type="submit">Guardar</button> {/* el navegador tiene por defecto una función para los submit, así que para interrumpirlo creamos una función (submitForm) */}
        </form>

    </>
  )

  
}

export default PersonajesForm;
