import axios from "axios";
import { useEffect, useState } from "react";
import "./Country.css";
import search from "../img/magnifying-glass-solid.svg";
import { useContext } from "react";
import Context from "../Context";

function Country() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const theme = useContext(Context);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className={
        theme ? "countries-container very-dark-blue" : "countries-container"
      }
    >
      <div className="search-section">
        <button
          className={theme ? "search-button very-dark-blue" : "search-button"}
          onClick={() => console.log(selectedValue)}
        >
          <img src={search} alt="glass" />
        </button>
        <input
          type="text"
          className={theme ? "search-input dark-blue" : "search-input"}
          placeholder="Search for a country"
          onChange={(e) => setSearchCountry(e.target.value)}
        />
        <select
          onChange={(e) => setSelectedValue(e.target.value)}
          className={theme ? "select dark-blue" : "select"}
          defaultValue="default"
        >
          <option value="default" disabled hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {countries
        .filter((value) => {
          if (searchCountry === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchCountry.toLowerCase())
          ) {
            return value;
          }
        })
        .filter((value) => {
          if (selectedValue === "") {
            return value;
          } else if (
            value.region.toLowerCase() === selectedValue.toLowerCase()
          ) {
            return value;
          }
        })
        .map((country) => (
          <div
            key={country.name}
            className={theme ? "country dark-blue" : "country"}
          >
            <img src={country.flags.png} alt={country.name} />
            <h3>{country.name}</h3>
            <br />
            <p>
              <b>Population:</b> {country.population}
            </p>
            <p>
              <b>Region:</b> {country.region}
            </p>
            <p>
              <b>Capital:</b> {country.capital}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Country;
