import React, { useState } from "react";
import Catalog from "./components/Catalog";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  return (
    <>
      <h1>Countries Around The World</h1>
      <div>
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
