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
