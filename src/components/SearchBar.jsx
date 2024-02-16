import React from "react";

const SearchBar = ({ searchTerm, onSearch, sortOrder, onToggleSort }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  const handleSortToggle = () => {
    onToggleSort();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSortToggle}>
        {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
      </button>
    </div>
  );
};

export default SearchBar;
