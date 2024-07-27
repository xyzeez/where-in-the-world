import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  getCountriesData,
  getFilteredCountries,
  getRegions,
  getSearchedCountries,
} from '../services/countriesApi';

const CountriesContext = createContext(null);

const initialData = {
  isLoading: true,
  countries: [],
  regions: [],
  filterBy: '',
  searchQuery: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'load/data':
      return { ...state, isLoading: true };
    case 'data/loaded':
      return { ...state, isLoading: false };
    case 'countries/loaded':
      return {
        ...state,
        countries: action.payload,
        regions: getRegions(action.payload),
      };
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
  const { isLoading, countries, regions, filterBy, searchQuery } = state;

  const loadCountries = async () => {
    try {
      dispatch({ type: 'load/data' });
      const countriesData = await getCountriesData();
      dispatch({ type: 'countries/loaded', payload: countriesData });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: 'data/loaded' });
    }
  };

  const setRegionFilter = (region) => {
    dispatch({ type: 'filter/set', payload: region });
  };

  const setSearchQuery = (query) => {
    dispatch({ type: 'query/set', payload: query });
  };

  const getRenderData = () => {
    try {
      const searched = searchQuery
        ? getSearchedCountries(countries, searchQuery)
        : countries;
      return filterBy ? getFilteredCountries(searched, filterBy) : searched;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        isLoading,
        countries,
        regions,
        filterBy,
        searchQuery,
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
