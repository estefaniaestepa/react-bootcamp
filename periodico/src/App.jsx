import './App.css'
// ESTE VA A SER NUESTRO INDEX, definimos rutas, organizamos proyecto, etc.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Colores from './assets/components/pages/Colores'
/* import Home from './assets/components/pages/Home' */

/* import Tienda from './assets/components/pages/Tienda' */


function App() {   // AL SER UN COMPONENTE LA FUNCIÓN SIEMPRE EMPIEZA EN MAYÚSCULAS

   // lógica que queremos implementar en el componente

  return (   // trozo de html que vamos a inyectar, metemos el código en una cajita (return) y las cosas que afectan al código fuera de la cajita
    <>
      <Router>
      <Routes>
     {/*    <Route path = "/home" Component={Home}/> */}
        <Route path = "/home" Component={Colores}/>
      </Routes>
      </Router>
    </>
  )
}

export default App

