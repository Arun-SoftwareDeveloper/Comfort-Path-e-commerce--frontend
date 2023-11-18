import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="searchInput"
        placeholder="Search for products..."
        aria-label="Search for products..."
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          id="searchButton"
          onClick={() => {
            const searchInput = document.getElementById("searchInput").value;
            onSearch(searchInput);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
