import "./App.css";
import Header from "./layouts/Header";
import Main from "./pages/Main";
import PersonajesForm from "./layouts/PersonajesForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Titans from "./pages/Titans";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/titans" element={<Titans />} />
            <Route path="/personajesForm" element={<PersonajesForm />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
