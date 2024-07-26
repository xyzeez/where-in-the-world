import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getCountryByName } from '../services/countriesApi';
import { useCountries } from '../contexts/CountriesContext';
import Button from '../ui/Button';
import Country from '../ui/countries/Country';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
`;

const StyledButton = styled(Button)`
  margin: 1rem 0 0 1rem;
`;

const Countries = () => {
  const navigate = useNavigate();
  const { countries } = useCountries();
  const { name } = useParams();
  const data = getCountryByName(countries, name);

  return (
    <Container>
      <StyledButton onClick={() => navigate('/home')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <span>Back</span>
      </StyledButton>
      <Country data={data} />
    </Container>
  );
};

export default Countries;
