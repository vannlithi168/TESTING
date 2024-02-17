import React, { useState } from "react";
import Catalog from "./components/Catalog";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  return (
    <>
      <h1>Countries Catalog</h1>
      <div className="container">
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          sortOrder={sortOrder}
          onToggleSort={() =>
            setSortOrder((prevSortOrder) =>
              prevSortOrder === "asc" ? "desc" : "asc"
            )
          }
        />
        <Catalog searchTerm={searchTerm} sortOrder={sortOrder} />
      </div>
    </>
  );
};

export default App;
