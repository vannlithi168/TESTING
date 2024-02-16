import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by country name"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
