import { Link } from "react-router-dom"
const Header = () => {
  return ( //vamos a crear un menú, haremos los botones para que el usuario vaya a la pánina donde quiera
<>
<Link to="/">
  <button>Main</button>
</Link>
<Link to="/about">
  <button>About</button>
</Link>
<Link to="/titanes">
  <button>Titanes</button>
</Link>
</>
  )
}

export default Header
