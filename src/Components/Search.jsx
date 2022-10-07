import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_DB_URI, cityOptions } from "../api/api";
import "./search.css";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_DB_URI}/cities?namePrefix=${inputValue}`, cityOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              id: `${city.id}`,
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="searchContainer">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
