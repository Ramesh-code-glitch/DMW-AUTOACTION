import React, { useState } from "react";
import "./Search.css";

const PartSearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for: Make - ${make}, Model - ${model}, Year - ${year}`
    );
  };

  return (
    <div className="search-bar-container">
      <div className="dropdown-container">
        <h3>
          Don't Get Hassel
          <br />
          Search Your Part Here
        </h3>

        <select
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="dropdown"
        >
          <option value="" disabled>
            Select Make
          </option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
          <option value="Ford">Ford</option> 
          
        </select>

        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="dropdown"
        >
          <option value="" disabled>
            Select Model
          </option>
          <option value="Corolla">Corolla</option>
          <option value="Mustang">Mustang</option>
          <option value="Mustang">Mustang</option>
          <option value="Mustang">Mustang</option>
          <option value="Mustang">Mustang</option>
          
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="dropdown"
        >
          <option value="" disabled>
            Select Year
          </option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          
        </select>

        <button className="search-button" onClick={handleSearch}>
          Help To Search My Part
        </button>
      </div>

      <div className="footer">
        <span>100% Genuine Used Parts</span>
        <div className="rating">
          <span>5.0 ★★★★★</span>
        </div>
      </div>
    </div>
  );
};

export default PartSearchBar;
