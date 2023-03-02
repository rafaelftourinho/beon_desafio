import React from "react";

import './FilterYear.css';
import img from '../assets/calendar.jpg';

const FilterYear = () => {
  return (
    <div className="filter">
      <span>
        Filtrar ano de publicação:
      </span>
      <div className="input-control">
        <input
          type="text"
          className="input-date"
        />
        <img src={img} className="calendar"/>
        <span className="control-span">
          até
        </span>
        <input
          type="text"
          className="input-date"
        />
        <img src={img} className="calendar"/>
      </div>
      <span>
        X resultados encontrados
      </span>
    </div>
  )
}

export default FilterYear;
