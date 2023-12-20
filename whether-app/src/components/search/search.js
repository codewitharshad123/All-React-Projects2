/*import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
//import { GEO_API_URL,geoApiOptions} from '../../api'
const  Search= ({onSearchChnage}) => {
const[search,setSearch]=useState(null)
const loadOptions=(inputValue)=>{
return   try {
  const response = await fetch("/cities", options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
}
const handleOnChange=(searchData)=>{
setSearch(searchData)
onSearchChnage(searchData)
}
  return (
    <AsyncPaginate//AsyyncPagination is liaa used hota haa  server saaa data pagination ki form me aa gaa
placeholder="Search for City"
debounceTimeout={600}//600 MILISEDNS KAA BAD SERVER SAA RESPONSE AA GAA
value={search}
onChange={handleOnChange}
loadOptions={loadOptions}
    />
  )
}
export default Search*/



/*import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL,geoApiOptions} from "../../api"
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,geoApiOptions); // Assuming 'options' is defined somewhere
      const result = await response.text();
      console.log(result);
      // Process the result and return it as an options array for the AsyncPaginate component
    } catch (error) {
      console.error(error);
      // Handle the error here
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;*/


/*import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue, prevOptions, { page }) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&page=${page}`,
        geoApiOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const options = data.cities.map((city) => ({
        value: city.id,
        label: city.name,
      }));

      return {
        options,
        hasMore: data.hasMore,
        additional: {
          page: page + 1,
        },
      };
    } catch (error) {
      console.error(error);
      // Handle the error here
      return {
        options: [],
        hasMore: false,
        additional: {},
      };
    }
  };

  const handleOnChange = (selectedOption) => {
    setSearch(selectedOption);
    onSearchChange(selectedOption);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;*/



import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue, prevOptions, { page }) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&page=${page}`,
        geoApiOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const options = data.cities.map((city) => ({
        value: city.id,
        label: city.name,
      }));

      console.log('API Response:', data); // Log the API response
      
      return {
        options,
        hasMore: data.hasMore,
        additional: {
          page: page + 1,
        },
      };
    } catch (error) {
      console.error(error);
      // Handle the error here
      return {
        options: [],
        hasMore: false,
        additional: {},
      };
    }
  };

  const handleOnChange = (selectedOption) => {
    setSearch(selectedOption);
    onSearchChange(selectedOption);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;



