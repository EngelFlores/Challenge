import React from 'react';
import "./Reset.css"

const Reset = ({ handleResetFilters }) => {
  return (
    <button className="reset-button" data-testid="reset-button" onClick={handleResetFilters}>Reset all filter</button>
  )
}

export { Reset }

