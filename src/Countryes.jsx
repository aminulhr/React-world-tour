import { useEffect, useState } from "react";
import Country from "./Country";
import "./country.css";

const Countryes = () => {
  const [countries, setCountryes] = useState([]);
  const [VisitCountey, setVisitCountey] = useState([]);
  const [addFlage, setFlage] = useState([]);
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

  const handalFlage = (country) => {
    const newFlage = [...addFlage, country];
    setFlage(newFlage);
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
      {/* Add Flag */}
      <div className="flag">
        <h3>Visited Country Flag</h3>
        {addFlage.map((country) => (
          <img key={country.ccn3} src={country.flags.png} alt="" srcSet="" />
        ))}
      </div>

      <div className="part-3">
        {countries.map((country) => (
          <Country
            handalVisitCountey={handalVisitCountey}
            handalFlage={handalFlage}
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countryes;
