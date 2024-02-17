import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ searchTerm, onSearch, sortOrder, onToggleSort }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  const handleSortToggle = () => {
    onToggleSort();
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-bar-button" onClick={handleSortToggle}>
        {sortOrder === "asc" ? "Sort Desc" : "Sort Asc"}
      </button>
    </div>
  );
};

export default SearchBar;
