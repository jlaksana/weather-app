import axios from "axios";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import "../styles/Search.css";

const Search = (props) => {
  const [search, setSearch] = useState(undefined);

  const loadOptions = async (input) => {
    const options = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      params: {
        countryIds: "US",
        minPopulation: "100000",
        namePrefix: input,
      },
      headers: {
        "X-RapidAPI-Key": "d5f299787emsh647a1c3347b6d89p1d013bjsnf613c4086d2f",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };
    return axios
      .request(options)
      .then(function (response) {
        return {
          options: response.data.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.regionCode}`,
            };
          }),
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const onChange = (searchData) => {
    setSearch(searchData);
    props.onSearchChange(searchData);
  };

  return (
    <div className="search">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={800}
        value={search}
        onChange={onChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
