import React, { useState, useEffect } from "react";
import CountryService from "../services/service";
import Fuse from "fuse.js";
import { sortCountries } from "../utils/helpers";
import { isEqualArray } from "../utils/helpers";
import Pagination from "./Pagination";

const Catalog = ({ searchTerm, sortOrder }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate indexes for slicing countries array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
      <ul>
        {currentItems.map((country) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCountries.length / itemsPerPage)}
        paginate={paginate}
      />
    </div>
  );
};

export default Catalog;
