import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  getCountriesData,
  getFilteredCountries,
  getRegions,
  getSearchedCountries,
} from '../services/countriesApi';

const CountriesContext = createContext(null);

const initialData = {
  countries: [],
  regions: [],
  selectedCountry: {},
  filterBy: '',
  searchQuery: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'countries/loaded':
      return {
        ...state,
        countries: action.payload,
        regions: getRegions(action.payload),
      };
    case 'country/selected':
      return { ...state, selectedCountry: action.payload };
    case 'filter/set':
      return { ...state, filterBy: action.payload };
    case 'query/set':
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const CountriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const { countries, regions, selectedCountry, filterBy, searchQuery } = state;

  const loadCountries = async () => {
    const countriesData = await getCountriesData();
    dispatch({ type: 'countries/loaded', payload: countriesData });
  };

  const setRegionFilter = (region) => {
    dispatch({ type: 'filter/set', payload: region });
  };

  const setSearchQuery = (query) => {
    dispatch({ type: 'query/set', payload: query });
  };

  const getRenderData = () => {
    const searched = searchQuery
      ? getSearchedCountries(countries, searchQuery)
      : countries;
    return filterBy ? getFilteredCountries(searched, filterBy) : searched;
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        regions,
        filterBy,
        searchQuery,
        selectedCountry,
        setRegionFilter,
        setSearchQuery,
        getRenderData,
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
