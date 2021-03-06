import React from "react";
import './search-box.styles.css';

// Example of functional component, which has no access to state or lifecycle methods.

export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);