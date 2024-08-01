import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

function Inputs() {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter city..." />

      <BiSearch size={25} className="search-icon" />
      <BiCurrentLocation size={25} className="search-icon" />

      <select name="units" id="select-units">
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  );
}

export default Inputs;
