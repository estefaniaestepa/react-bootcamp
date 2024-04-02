/* eslint-disable no-undef */
import axios from "axios";
import { useState } from "react"; 

const LoginFormMath = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const login = (event) => {
    event.preventDefault();

/*     const user = "manolo@test.es";
    const password = "Upgrade1234!"; */
    const url = "https://node-tickets-chi.vercel.app/user/login";

    try {
      axios
        .post(url, {
          user,
          password,
        })
        .then((res) => sessionStorage.setItem("token", res.data.data.token));
    } catch (error) {
      console.log(error);
    setError(true); 
    }
  };

/*   return <button onClick={login}>Log In</button>; */
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
};

export default LoginFormMath;