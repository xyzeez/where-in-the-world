import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  getCountriesData,
  getFilteredCountries,
  getRegions,
} from '../services/countriesApi';

const initialData = {
  countries: [],
  filteredCountries: null,
  selectedCountry: {},
  regions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'countries/loaded':
      return {
        ...state,
        countries: action.payload,
        regions: getRegions(action.payload),
      };
    case 'countries/filtered':
      return { ...state, filteredCountries: action.payload };
    case 'country/selected':
      return { ...state, selectedCountry: action.payload };
  }
};

const CountriesContext = createContext(null);

const CountriesProvider = ({ children }) => {
  const [{ countries, filteredCountries, selectedCountry, regions }, dispatch] =
    useReducer(reducer, initialData);

  const loadCountries = async () => {
    dispatch({ type: 'countries/loaded', payload: await getCountriesData() });
  };

  const filterByRegion = (region) => {
    dispatch({
      type: 'countries/filtered',
      payload: getFilteredCountries(countries, region),
    });
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        filteredCountries,
        selectedCountry,
        regions,
        filterByRegion,
      }}>
      {children}
    </CountriesContext.Provider>
  );
};

const useCountries = () => {
  const context = useContext(CountriesContext);

  if (!context) throw new Error('Countries context was used outside provider');

  return context;
};

export { CountriesProvider, useCountries };
