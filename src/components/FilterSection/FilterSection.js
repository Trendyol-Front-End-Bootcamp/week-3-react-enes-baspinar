import "./FilterSection.scss";
import React, { useState, useEffect } from "react";

function FilterSection({ apiUrl, setApiUrl }) {
  const [filters, setFilters] = useState({
    name: "",
    species: "",
    type: "",
    gender: "",
    status: "",
  });

  useEffect(() => {
    setApiUrl(
      `https://rickandmortyapi.com/api/character/?name=${
        filters.name || ""
      }&status=${filters.status || ""}&species=${filters.species || ""}&type=${
        filters.type || ""
      }&gender=${filters.gender || ""}`
    );
  }, [filters]);

  const handleFormChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="characters-content__filter-section">
      <h2>Filter</h2>
      <form className="characters-content__filter-form" autoComplete="off">
        <label htmlFor="name">
          Name
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="species">
          Species
          <br />
          <input
            type="text"
            id="species"
            name="species"
            value={filters.species}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="type">
          Type
          <br />
          <input
            type="text"
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="gender">
          Gender:
          <br />
          <select
            name="gender"
            id="gender"
            value={filters.gender}
            onChange={handleFormChange}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <label htmlFor="status">
          Status:
          <br />
          <select
            name="status"
            id="status"
            value={filters.status}
            onChange={handleFormChange}
          >
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default FilterSection;
