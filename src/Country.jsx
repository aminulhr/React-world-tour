import "./country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;
  return (
    <div className="country">
      <h2>Name: {name.common} </h2>
      <img className="img" src={flags.png} alt="" srcSet="" />
    </div>
  );
};

export default Country;
