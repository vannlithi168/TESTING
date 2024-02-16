// src/components/Catalog.js

import React, { useState, useEffect } from "react";
import Service from "../services/service";

const Catalog = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Service.getAllCountries();
        setCountries(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Country Catalog</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.cca2}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
