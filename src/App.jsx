import React, { useState } from "react";
import Catalog from "./components/Catalog";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortToggle = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <h1>Countries Around The World</h1>
      <div>
        <SearchBar
          searchTerm={searchTerm}
          onSearch={handleSearch}
          sortOrder={sortOrder}
          onToggleSort={handleSortToggle}
        />
        <Catalog searchTerm={searchTerm} sortOrder={sortOrder} />
      </div>
    </>
  );
};

export default App;
