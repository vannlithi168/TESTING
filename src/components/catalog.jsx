import React, { useState, useEffect } from "react";
import CountryService from "../services/service";

const Catalog = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <ul>
        {countries.map((country) => (
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
