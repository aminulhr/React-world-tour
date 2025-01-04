import { useEffect, useState } from "react";
import Country from "./Country";

const Countryes = () => {
  const [countryes, setCountryes] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryes(data);
      });
  }, []);
  return (
    <div>
      <h3>Total Country : {countryes.length} </h3>

      {countryes.map((country) => (
        <Country key={country.cca2} country={country}></Country>
      ))}
    </div>
  );
};

export default Countryes;
