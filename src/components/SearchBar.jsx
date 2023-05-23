import { useState } from "react";
import { FaMicrophone,   FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  // FaMicrophone
  // https://jsonplaceholder.typicode.com/users    try this api also it dose not gi an error please
  const fetchData = (value) => {
    fetch( " http://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((state) => {
          return (
            value &&
            state&&
            state.name &&
             
            state.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaMicrophone/>
    </div>
    
  );
};