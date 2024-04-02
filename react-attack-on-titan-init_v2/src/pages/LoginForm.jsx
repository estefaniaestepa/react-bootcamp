import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const login = (event) => {
    event.preventDefault(); // Todos los componentes html tienen un comportamiento por defecto. El envio de un formulario implica cosas como recargar la página, enviar una petición get o post a traves del propio navegador y no queremos que haga eso. Le estamos diciendo que nos deje manejar gracias al preventDefault.

    // const user = "manolo@test.es";
    // const password = "Upgrade1234!";
    const url = "https://test-vercel-20240323.vercel.app/user/login";

    try {
      axios
        .post(url, {
          // El login es un .post porque tenemos que enviar cosas.
          user,
          password,
        })
        .then((res) => sessionStorage.setItem("token", res.data.data.token));

      // Hacemos la petición a nuestro servidor (le mandamos nuestro usuario y nuestra contraseña). Nos devuleve el token que vamos a almacenar en la sesión del navegador (Session storage, también se puede almacenar en los cookies). El navegador no nos deslogueará porque tendrá la información del token almacenada y válida.
      // En los cookies, se almacenarán datos nuestros (id de sesión, cache del usuario, etc) que permiten a la página web identificarnos de mejor forma.
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <div className="login-container">
        <h1>Log In</h1>
        <form onSubmit={login}>
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="Introduzca su email"
            required
          ></input>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Introduzca su password"
            required
          ></input>
          <button type="submit">Log In</button>;
        </form>
        {error && <div>Ha ocurrido un error</div>}
      </div>
    </>
  );
};

export default LoginForm;
