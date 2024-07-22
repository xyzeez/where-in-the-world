import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { useCountries } from '../contexts/CountriesContext';

const Filter = styled.div`
  position: relative;
  flex: 200px 0 1;
  /* border: 1px solid red; */
`;

const StyledButton = styled(Button)`
  width: 200px;
  justify-content: space-between;
`;

const List = styled.ul`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  left: 0;
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  flex-direction: column;
  font-size: 14px;
  padding: 0.5rem 0;
  border-radius: var(--element-round);
  box-shadow: var(--element-shadow);
  background-color: var(--theme-element);
`;

const ListItem = styled.li`
  color: var(--theme-text);
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const FilterBar = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const { regions, setRegionFilter } = useCountries();

  const handleRegionSelected = (region) => {
    setRegionFilter(region);
    setOpenFilter(false);
  };

  return (
    <Filter>
      <StyledButton onClick={() => setOpenFilter((open) => !open)}>
        <span>Filter by Region</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </StyledButton>
      <List $show={openFilter}>
        <ListItem onClick={() => handleRegionSelected('')}>none</ListItem>
        {regions.map((region) => (
          <ListItem key={region} onClick={() => handleRegionSelected(region)}>
            {region}
          </ListItem>
        ))}
      </List>
    </Filter>
  );
};

export default FilterBar;
