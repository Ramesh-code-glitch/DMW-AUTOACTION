import React from "react";
import "./Header.css"; // Importing the CSS file
import Search from '../Searchbar/Searchbar'; // Importing the Search component

const CarPartsBanner = () => {
  return (
    <div className="banner-container">
      {/* Text Container */}
      <div className="text-container">
        <h1>
          ALL TYPE OF <span className="highlight">CAR PARTS</span> DELIVERED
        </h1>
        <p>
          Select Used Parts supply quality used parts from all over India, any
          part from full engines to modules. Get in touch now.
        </p>

        <div className="image-container">
          <img src="/AA DMW.png" alt="Car Parts" />
        </div>
      </div>
      
      {/* Search Container */}
      <div className="search-container">
        <Search />
      </div>
    </div>
  );
};

export default CarPartsBanner;
