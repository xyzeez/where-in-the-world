import styled from 'styled-components';
import { useCountries } from '../../contexts/CountriesContext';
import CountryItem from './CountryItem';

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CountriesList = () => {
  const { getRenderData } = useCountries();

  const renderData = getRenderData();

  return (
    <Container>
      {renderData.map((item) => (
        <CountryItem key={item.name} data={item} />
      ))}
    </Container>
  );
};

export default CountriesList;
