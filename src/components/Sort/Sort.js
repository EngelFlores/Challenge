import React, { useState } from 'react';
import "./Sort.css"

const Sort = ({ handleSort }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="sort">
      <button className="sort-button" onClick={handleMenu}>Sort</button>
      <div className={`sort-list-container ${showMenu ? "show" : ""}`}>
        <p className="sort-list-item" onClick={() => handleSort("firstName")} data-testid="sort-list-item">Name</p>
      </div>
    </div>
  )
}

export { Sort }

