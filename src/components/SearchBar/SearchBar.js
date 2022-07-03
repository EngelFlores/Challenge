import React from 'react';
import "./SearchBar.css"

const SearchBar = ({ onChange, placeholder }) => {

  return (
    <div className="search-bar-container">
      <input className="search-bar-input" placeholder={placeholder} data-testid="search-input" onChange={onChange} />
    </div>
  )
}

export { SearchBar }

