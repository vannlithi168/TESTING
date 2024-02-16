// src/components/Catalog.js

import React, { useState, useEffect } from "react";
import CountryService from "../services/service";
import Modal from "./Modal";

const Catalog = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CountryService.getAllCountries();
        console.log(data);
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCountries = [...filteredCountries].sort((a, b) => {
    const nameA = a.name.official.toLowerCase();
    const nameB = b.name.official.toLowerCase();
    return sortOrder === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  const itemsPerPage = 25;
  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);
  const paginatedCountries = sortedCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h1>Country Catalog</h1>
      <input
        type="text"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
      </button>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <ul>
        {paginatedCountries.map((country) => (
          <li key={country.cca2} onClick={() => handleCountryClick(country)}>
            {country.flags.png && (
              <img
                src={country.flags.png}
                alt={`${country.name.official} flag`}
                style={{ width: "30px", marginRight: "10px" }}
              />
            )}
            {country.name.official} ({country.cca2}, {country.cca3})
          </li>
        ))}
      </ul>
      {selectedCountry && (
        <Modal country={selectedCountry} onClose={closeModal} />
      )}
    </div>
  );
};

export default Catalog;
