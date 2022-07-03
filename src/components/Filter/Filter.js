import React, { useState } from 'react';
import "./Filter.css"

const Filter = ({ title, handleFilter }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="filter">
      <button className="filter-button" data-testid="filter-button" onClick={handleMenu}>{title}</button>
      <div className={`filter-list-container ${showMenu ? "show" : ""}`} data-testid="filter-list-container">
        <p className="filter-list-item" onClick={() => handleFilter("active")} data-testid="list-item-active">Active</p>
        <p className="filter-list-item" onClick={() => handleFilter("pending")} data-testid="list-item-pending">Pending</p>
        <p className="filter-list-item" onClick={() => handleFilter("declined")} data-testid="list-item-declined">Declined</p>
        <p className="filter-list-item" onClick={() => handleFilter("closed")} data-testid="list-item-closed">Closed</p>
      </div>
    </div>
  )
}

export { Filter }

