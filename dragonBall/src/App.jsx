import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Characters from "./assets/components/layout/Characters";

function App() {


  return (
    /*devuelve el componente que hay en el return. Se conoce tambien como Fragmento*/
    <>
      <Router>
        <Routes>
          <Route path="/characters" Component={Characters} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
