import axios from "axios";
import React, { useEffect, useState } from "react";
import AOTTitansCard from "./AOTTitansCard";

function AOTTitans() {
  const [allegianceSelection, setAllegiance] = useState("");
  const [titans, setTitans] = useState([]);
  useEffect(() => {
    const url = "https://api.attackontitanapi.com/titans";

    axios.get(url).then((res) => {
      const dataTitans = res.data.results.map((titan) => ({
        name: titan.name,
        img: titan.img.split(".png")[0] + ".png",
        abilities: titan.abilities,
        height: titan.height,
        allegiance: titan.allegiance,
      }));
      setTitans(dataTitans);
    });
  }, []);
  //   const [name, setName] = useState("");
  //   const [titans, setTitans] = useState([]);
  //   // const [isUsed, setUsed] = useState(false);

  //   useEffect(() => {
  //     const url = `https://api.attackontitanapi.com/titans`;
  //     //const url = `https://api.attackontitanapi.com/characters?name=armin`

  //     //   if (name && name != "") {
  //     axios.get(url).then((res) => {
  //       //console.log(res)
  //       //   if (res.data.results.length > 0) {
  //       const filterData = res.data.results.map((titan) => ({
  //         id: titan.id,
  //         name: titan.name,
  //         //   img: titan.img.split(".png")[0] + ".png",
  //         img: titan.img,
  //         height: titan.height,
  //         abilities: titan.abilities,
  //         allegiance: titan.allegiance,
  //       }));
  //       setTitans(filterData);
  //       // console.log(filterData);
  //       //   } else {
  //       //     setCharacters([]);
  //       //   }
  //     });
  //     //   } else {
  //     //     setCharacters([]);
  //     //   }
  //   }, [name]);

  const selector = (event) => {
    setAllegiance(event.target.value);
  };

  return (
    <>
      <div className="selector-container">
        <div className="search">
          <h1>Titans of Attack on Titan</h1>
          <select
            className="selector"
            value={allegianceSelection}
            onChange={selector}
          >
            <option value="">Choose a titan...</option>
            {titans.map((titan) => (
              <option key={titan.allegiance} value={titan.allegiance}>
                {titan.allegiance}
              </option>
            ))}
          </select>
        </div>
        <div className="main">
          {allegianceSelection !== "" && (
            <AOTTitansCard
              titan={titans.find((titan) => titan.name === allegianceSelection)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AOTTitans;
