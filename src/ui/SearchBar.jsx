import styled from 'styled-components';
import { useCountries } from '../contexts/CountriesContext';

const Search = styled.label`
  flex: 400px 0 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  padding: 0.25rem 1.75rem;
  border-radius: var(--element-round);
  box-shadow: var(--element-shadow);
  background-color: var(--theme-element);

  & > svg {
    stroke: var(--theme-text);
    width: 18px;
    aspect-ratio: 1/1;
  }

  & > input {
    font-size: 0.875rem;
    color: var(--theme-text);
    width: 100%;
    padding: 0.5rem 0;
    background-color: transparent; /* Equivalent to bg-transparent */
    border: none;

    &::placeholder {
      color: var(--theme-text);
    }

    &:focus {
      outline: none;
    }
  }
`;

const SearchBar = () => {
  const { setSearchQuery } = useCountries();

  return (
    <Search>
      <span className="sr-only">Search for a country:</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search for a country..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Search>
  );
};

export default SearchBar;
