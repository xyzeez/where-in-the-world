export const getCountriesData = async () => {
  try {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRegions = (countries) => {
  if (!countries || !Array.isArray(countries)) {
    console.warn('getRegions called with invalid data:', countries);
    return [];
  }

  const regionSet = new Set();

  countries.forEach((country) => {
    regionSet.add(country.region);
  });

  return Array.from(regionSet);
};

export const getFilteredCountries = (countries, region) => {
  if (!region) {
    return null;
  }

  return countries.filter((country) => country.region === region);
};

export const getSearchedCountries = (countries, searchTerm) => {
  if (!searchTerm) {
    return null;
  }

  const lowercaseSearchTerm = searchTerm.toLowerCase();
  return countries.filter((country) => {
    const lowercaseName = country.name.toLowerCase();
    return lowercaseName.startsWith(lowercaseSearchTerm);
  });
};
export const getCountryByName = (countries, name) => {
  return countries.find(
    (country) => country.name.toLowerCase() === name.toLowerCase()
  );
};

export const getCurrencyCodes = (currencies) => {
  return currencies.map((currency) => currency.code).join(', ');
};
export const getLanguageNames = (languages) => {
  return languages.map((language) => language.name).join(', ');
};
