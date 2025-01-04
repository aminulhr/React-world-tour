import { useState } from "react";
import "./country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;
  const [Visited, setVisited] = useState(false);
  const handalVisit = () => {
    setVisited(!Visited);
  };
  return (
    <div className="country">
      <h2>Name: {name.common} </h2>
      <img className="img" src={flags.png} alt="" srcSet="" />
      <button onClick={handalVisit}>{Visited ? "Visited" : "Going"}</button>
      {Visited ? "I visited this Country" : "want to visit"}
    </div>
  );
};

export default Country;
