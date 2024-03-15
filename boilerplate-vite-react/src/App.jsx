/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./App.css"; 
/* import Armario from "./assets/components/pages/Armario"; */

import Experiencia from "./assets/components/layout/Experiencia";
import Cabecera from "./assets/components/layout/Cabecera";
import Portrait from "./assets/components/common/Portrait";
import Despedida from "./assets/components/layout/Despedida";
import Contador from "./assets/components/pages/Contador"; 

const trabajosLista = [
  {empresa: 'Sarpi', cargo: 'Admisnitrativa', años:'2010-Actualidad', experiencia: 'Gestión de cierres contables'},
  {empresa: 'Sarpi', cargo: 'Admisnitrativa', años:'2010-Actualidad', experiencia: 'Gestión de cierres contables'},
  {empresa: 'Sarpi', cargo: 'Admisnitrativa', años:'2010-Actualidad', experiencia: 'Gestión de cierres contables'},
]

const datosDeContacto = { img:'./img/images.jpg' ,nombre: 'Estefania Estepa', nacimiento: '10/03/1987', lugar:'Castellón', email:'fannyea87@hotmail.com'}

const despedida = "Carnet de conducir, Movilidad geográfica";

function App() {
 /*  let despedida1 =
    "Lideré un proyecto de reorganización de archivos que resultó en una mejora del 30% en la eficiencia del acceso a la información.Voluntaria en un programa de tutoría para estudiantes de secundaria, brindando apoyo en habilidades administrativas y organizativas."; */
  return (
    <>
      <Cabecera datos= {datosDeContacto}/>
      <Experiencia trabajos = {trabajosLista}/>
      <Despedida despedida = {despedida}/>
  

      <Contador/> 

     {/*  <Armario/> */}
    
    </>
  );
}

export default App;
