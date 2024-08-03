import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

function Inputs({ initialUnits, setQuery, setUnits }) {
  const [inputCity, setInputCity] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(initialUnits);

  function handleSearchClick() {
    if (inputCity !== "") setQuery({ q: inputCity });
  }

  function handleEnterDown(e) {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  }

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({
          lat: latitude,
          lon: longitude,
        });
      });
    }
  }

  function handleUnitsChange(e) {
    setSelectedUnit(e.target.value);
    setUnits(e.target.value);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        onKeyDown={handleEnterDown}
        placeholder="Enter city..."
      />

      <BiSearch
        onClick={handleSearchClick}
        size={25}
        tabIndex={0} // Places the element in the default tab order
        className="search-icon"
      />
      <BiCurrentLocation
        onClick={handleLocationClick}
        size={25}
        tabIndex={0}
        className="search-icon"
      />

      <select
        name="units"
        value={selectedUnit}
        onChange={handleUnitsChange}
        id="select-units"
      >
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  );
}

export default Inputs;
