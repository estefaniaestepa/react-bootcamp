import React, { useEffect, useState } from "react";
import axios from "axios";
import TitanCard from "./TitanCard";

function Titanes() {
  const [titanSelection, setTitan] = useState("");
  const [titanes, setTitanes] = useState([]);
  useEffect(() => {
    const url = "https://api.attackontitanapi.com/titans";

    axios.get(url).then((res) => {
      const dataTitanes = res.data.results.map((titan) => ({
        name: titan.name,
        img: titan.img.split(".png")[0] + ".png",
        abilities: titan.abilities,
        height: titan.height,
        allegiance: titan.allegiance,
      }));
      setTitanes(dataTitanes);
    });
  }, []);

  const selector = (ev) => {
    setTitan(ev.target.value);
  };

  return (
    <div>
      <div className="search">
        <select className="selector" value={titanSelection} onChange={selector}>
          <option value="">Selecciona un titán</option>
          {titanes.map((titan) => (
            <option key={titan.name} value={titan.name}>
              {titan.name}
            </option>
          ))}
        </select>
      </div>
      <div className="main">
        {titanSelection !== "" && (
          <TitanCard
            titan={titanes.find((titan) => titan.name === titanSelection)}
          />
        )}
      </div>
    </div>
  );
}

export default Titanes;
