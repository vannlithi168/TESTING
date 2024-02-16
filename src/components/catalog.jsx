import React, { useState, useEffect } from "react";
import CountryService from "../services/service";
import Fuse from "fuse.js";
import { sortCountries, isEqualArray } from "../utils/helpers";

const Catalog = ({ searchTerm, sortOrder }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CountryService.getAllCountries();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCountries(countries);
    } else {
      const fuse = new Fuse(countries, {
        keys: ["name.official"],
        threshold: 0.4,
      });
      const results = fuse.search(searchTerm.trim());
      setFilteredCountries(results.map((result) => result.item));
    }
  }, [searchTerm, countries]);

  useEffect(() => {
    const sortedCountries = sortCountries(filteredCountries, sortOrder);
    if (!isEqualArray(sortedCountries, filteredCountries)) {
      setFilteredCountries(sortedCountries);
    }
  }, [sortOrder, filteredCountries]);

  return (
    <div>
      <h1>Country Catalog</h1>
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca2}>
            <img
              src={country.flags.png}
              alt={`${country.name.official} flag`}
              style={{ width: "30px", marginRight: "10px" }}
            />
            {country.name.official} ({country.cca2}, {country.cca3})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
