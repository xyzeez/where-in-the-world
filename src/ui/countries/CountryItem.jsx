import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.li`
  overflow: hidden;
  border-radius: var(--element-round);
  box-shadow: var(--element-shadow);
  background-color: var(--theme-element);
`;

const Wrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  padding-bottom: 2rem;
  color: var(--theme-text);
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.625rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1rem;

  & > span {
    font-weight: var(--semi-bold);
  }
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 18 / 11;
  object-fit: cover;
`;

const CountryItem = ({ data }) => {
  const { name, flag, population, region, capital } = data;

  return (
    data && (
      <Container>
        <Wrapper to={`/countries/${name}`}>
          <Img src={flag} alt="" />
          <Inner>
            <Title>{name}</Title>
            <Text>
              <span>Population:</span> {population?.toLocaleString('en-US')}
            </Text>
            <Text>
              <span>Region:</span> {region}
            </Text>
            <Text>
              <span>Capital:</span> {capital}
            </Text>
          </Inner>
        </Wrapper>
      </Container>
    )
  );
};

export default CountryItem;
