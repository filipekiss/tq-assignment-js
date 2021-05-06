import React, { useReducer, useState } from "react";
import { fetchSearchResults } from "../api/search";
import "./Search.css";

function Search(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="What are you looking for?"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchSearchResults(query).then(setResults);
            }
          }}
        />
        <button
          className="search-button"
          type="search"
          onClick={() => fetchSearchResults(query).then(setResults)}
        >
          Search
        </button>
      </div>
      <div className="search-results">
        {Boolean(results) &&
          results.map((result) => (
            <div className="search-result-item">
              {JSON.stringify({ type: "result", result })}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
