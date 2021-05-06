import React, { useEffect, useState } from "react";
import { fetchSearchResults } from "../api/search";
import "./Search.css";

function formatPrice(price) {
  return `€ ${price.toFixed(2)}`;
}

function Search(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  useEffect(() => {
    fetchSearchResults("Museums").then(setResults);
  }, []);

  return (
    <div>
      <div className="search-form">
        <input
          type="text"
          className="text-input"
          placeholder="What are you looking for?"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchSearchResults(query).then(setResults);
            }
          }}
        />
        <button
          className="action-button"
          type="search"
          onClick={() => fetchSearchResults(query).then(setResults)}
        >
          Search
        </button>
      </div>
      <div className="search-results">
        {Boolean(results) &&
          results.map((result, index) => (
            <a className="card media" key={index} href={result.productUrl}>
              <img alt={result.title} src={result.image} />
              <div className="content">
                <h2 className="title">{result.title}</h2>
                <p className="summary">{result.summary}</p>
                <div className="price-tag">{formatPrice(result.price)}</div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default Search;
