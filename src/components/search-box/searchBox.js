import React from "react";
import "./searchBox.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="search cards"
        onChange={handleChange}
      />
    </div>
  );
};
