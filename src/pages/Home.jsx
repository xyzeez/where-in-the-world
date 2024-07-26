import styled from 'styled-components';
import SearchBar from '../ui/SearchBar';
import FilterBar from '../ui/FilterBar';
import CountriesList from '../ui/countries/CountriesList';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: top;
  justify-content: space-between;
  gap: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <Row>
        <SearchBar />
        <FilterBar />
      </Row>
      <CountriesList />
    </Container>
  );
};

export default Home;
