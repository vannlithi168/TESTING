import React, { useState } from "react";
import Catalog from "./components/Catalog";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <h1>Countries Around The World</h1>
      <div>
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <Catalog searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default App;
