import React from "react";
import "./Search.css";

/* Feel free to make this a functional component if you consider it necessary */
class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="What are you looking for?"
        />
        <button className="search-button" type="search">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
