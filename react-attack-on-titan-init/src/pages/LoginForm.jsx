/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'  //libreria que recoge todos los datos json

const LoginForm = () => {


    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const login = async (event)=>{
        event.preventDefault() //le decimos que deje de actuar por defecto y que nos deje actuar a nosotros

        const url = "node-tickets-phi.vercel.app/user/login" //Enlace a donde se hace la petición
        try {
            // Se hace peticion a la bbdd con los datos del login . complila todos los datos json
            axios.post(url, { //el post es porque le enviamos unos datos , es decir le enviamos nuestros datos para poder logearnos, dentro ponemos la url, user, password
                user, password
            })
            .then((response)=> sessionStorage.setItem("token", response.data.data.token))
                //Usamos la sesion del navegador para almacenar el token de forma temporal
                //La sesion del navegador se puede ver en inspecionar --> aplicación --> almacenamiento
        } catch (error) {
            setError(true)
            console.log(error);
        }
        
    }

  return (
    <>
        <h1>Login</h1>
        <form onSubmit={login}>
            <input 
                type="text" 
                value={user} 
                onChange={(ev)=>{ 
                    setUser(ev.target.value)}} 
                placeholder='Introduzca su correo electrónico' 
                required>
            </input>
            <input 
                type="pasword" 
                value={password} 
                onChange={(ev)=>{setPassword(ev.target.value)}} 
                placeholder='Introduzca su contraseña' 
                required>
            </input>        
            <button type='submit'>Login</button>   {/*  necesitaremos un boton de login  */}
            {error && <div>Ha ocurrido un error</div>} {/* si error es true pasa lo de detrás */}
        </form>
    </>
  )
}

export default LoginForm
