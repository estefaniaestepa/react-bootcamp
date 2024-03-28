import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tienda from './assets/components/pages/Tienda'



function App() {



  return (
    <>
<Router>
<Routes>
  <Route path = '/tienda' Component={Tienda}/>
</Routes>
</Router>
    </>
  )
}

export default App

//SOLO RUTAS Y AUTENTIFICACIÓN