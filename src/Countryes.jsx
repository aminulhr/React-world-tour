import { useEffect, useState } from "react";
import Country from "./Country";
import "./country.css";
// import Countryes from "./Countryes";

const Countryes = () => {
  const [countries, setCountryes] = useState([]);
  const [VisitCountey, setVisitCountey] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryes(data);
      });
  }, []);

  const handalVisitCountey = (country) => {
    const newCountry = [...VisitCountey, country];
    setVisitCountey(newCountry);
  };

  return (
    <div>
      <h3>Total Country : {countries.length} </h3>
      <h3>My visited Country : {VisitCountey.length}</h3>
      <div>
        {VisitCountey.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </div>

      <div className="part-3">
        {countries.map((country) => (
          <Country
            handalVisitCountey={handalVisitCountey}
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countryes;
