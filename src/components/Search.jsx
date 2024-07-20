import Select from "react-select";

import data from "../data/city.list.json";
import { useState } from "react";


const Search = ({city, setCity}) => {

  const cityOptions = data.map(city => ({
    value: city.id,
    label: city.name
}));

  const handleCityChange = (city) => {
    setCity(city);
  };
  return (
    <div>
      <Select
        options={cityOptions}
        onChange={handleCityChange}
        value={city}
        placeholder="Select a city"
      />
    </div>
  );
};

export default Search;
