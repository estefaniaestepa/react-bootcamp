import { useState } from "react";
import "./App.css";
import PersonajesCard from "./layouts/PersonajesCard";
import AOTCharacters from "./layouts/old/AOTCharacters";
import PersonajesForm from "./layouts/PersonajesForm";
import { BrowserRouter as Router, Routes, Route, /* Switch*/ } from "react-router-dom"; 
import Main from "./pages/Main";
import Header from ".layouts/Header";
import About from "./pages/About";
import Titanes from "./pages/Titanes";

 function App() {
  const [listaPerfiles, setperfiles] = useState([]);
  const addPerfil = (perfil) => {
    const nuevosPerfiles = [...listaPerfiles, perfil];
    setperfiles(nuevosPerfiles);
  };  
  return (
    <>
    <Main/>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element = {<Main/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/titanes" element = {<Titanes/>}/>
          </Routes>
        </main>
      </Router>
      <AOTCharacters/>
      <PersonajesForm addPerfil={addPerfil} />
      <PersonajesCard listaPerfiles={listaPerfiles} /> 
      
    </>
  );
} 

export default App;
