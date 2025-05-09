// filepath: c:\Users\hp\Desktop\react.sidebar\src\components\SearchBar.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex items-center border rounded px-2 py-1">
      <FaSearch className="text-gray-500 mr-2" onClick={handleSearch} />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="outline-none flex-1"
      />
    </div>
  );
};

export default SearchBar;