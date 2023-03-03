import React, { useContext, useEffect } from "react";
import MainContext from "../Context/MainContext";

import './FilterYear.css';
import img from '../assets/calendar.jpg';

const FilterYear = () => {
  const context: any = useContext(MainContext);
  const {
    setBookYears,
    booksFound,
    searched,
    result,
  } = context;
  const [year, setYear] = React.useState({
    yearStart: '',
    yearEnd: '',
  });

  useEffect(() => {
    setBookYears([year.yearStart, year.yearEnd]);

  }, [year.yearStart, year.yearEnd]);

  return (
    <div className="filter">
      <span>
        Filtrar ano de publicação:
      </span>
      <div className="input-control">
        <input
          type="text"
          className="input-date"
          value={ year.yearStart }
          onChange={ (event) => setYear({ ...year, yearStart: event.target.value }) }
        />
        <img src={img} className="calendar"/>
        <span className="control-span">
          até
        </span>
        <input
          type="text"
          className="input-date"
          value={ year.yearEnd }
          onChange={ (event) => setYear({ ...year, yearEnd: event.target.value }) }
        />
        <img src={img} className="calendar"/>
      </div>
        { booksFound.length > 0  && <span>{`${booksFound.length} resultados encontrados`}</span>
        ||
          searched.length > 0 && <span>{`${searched.length} resultados encontrados`}</span>
        ||
          <span>{`${result.total} resultados encontrados`}</span>
        }
    </div>
  )
}

export default FilterYear;
