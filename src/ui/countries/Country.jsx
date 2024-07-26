import styled from 'styled-components';
import {
  getCurrencyCodes,
  getLanguageNames,
} from '../../services/countriesApi';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  padding: 0 1rem 1rem;

  @media (min-width: 1024px) {
    gap: 4rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 20 / 15;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 45%;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--theme-text);

  @media (min-width: 1024px) {
    justify-content: center;
    padding-top: 2rem;
    width: 45%;
  }
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  line-height: 1.625rem;

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1rem;

  & > span {
    font-weight: var(--semi-bold);
  }
`;

const BorderList = styled(Text)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;

  & > span {
    &:first-child {
      display: block;
      width: 100%;
      font-weight: var(--semi-bold);
    }

    &:not(:first-child) {
      font-weight: 300;
      color: var(--theme-text);
      padding: 0.25rem 1rem;
      border: none;
      border-radius: var(--element-round);
      box-shadow: var(--element-shadow);
      background-color: var(--theme-element);
    }
  }

  @media (min-width: 1024px) {
    margin-top: 4rem;
  }
`;

const Country = ({ data = {} }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = data;

  return (
    <Container>
      <Img src={flag} alt="" />
      <Inner>
        <Title>{name}</Title>
        <CountryInfo>
          <List>
            <li>
              <Text>
                <span>Native Name:</span> {nativeName}
              </Text>
            </li>
            <li>
              <Text>
                <span>Population:</span> {population?.toLocaleString('en-US')}
              </Text>
            </li>
            <li>
              <Text>
                <span>Region:</span> {region}
              </Text>
            </li>
            <li>
              <Text>
                <span>Sub Region:</span> {subregion}
              </Text>
            </li>
            <li>
              <Text>
                <span>Capital:</span> {capital}
              </Text>
            </li>
          </List>
          <List>
            <li>
              <Text>
                <span>Top Level Domain:</span> {topLevelDomain?.[0]}
              </Text>
            </li>
            <li>
              <Text>
                <span>Currencies:</span>{' '}
                {currencies && getCurrencyCodes(currencies)}
              </Text>
            </li>
            <li>
              <Text>
                <span>Languages:</span>{' '}
                {languages && getLanguageNames(languages)}
              </Text>
            </li>
          </List>
        </CountryInfo>
        {borders && (
          <BorderList>
            <span>Border Countries:</span>{' '}
            {borders?.map((border) => (
              <span key={border}>{border}</span>
            ))}
          </BorderList>
        )}
      </Inner>
    </Container>
  );
};

export default Country;
