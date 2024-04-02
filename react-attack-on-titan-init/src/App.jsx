import "./App.css";
import Header from "./layouts/Header";
import Main from "./pages/Main";
// import PersonajesForm from "./layouts/PersonajesForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Titanes from "./pages/Titanes";
import LoginFormMath from "./pages/LoginFormMath";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/titanes" element={<Titanes />} />
            <Route path="*" element={<LoginFormMath/>} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;