import React, { useState, useEffect } from "react";

const CountryInfo = ({ countryName }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        console.log(data[0]);
      })
      .catch((error) => console.error("Error:", error));
  }, [countryName]);

  return (
    <div>
      {country ? (
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Región: {country.region}</p>
          <img src={country.flags.png} alt={`${country.name.common} flag`} />
          <h3>paises limitrofes</h3>
          <ol type="I">
            {country.borders.map((pais, index) => (
              <li key={index}>{pais}</li>
            ))}
          </ol>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default CountryInfo;
