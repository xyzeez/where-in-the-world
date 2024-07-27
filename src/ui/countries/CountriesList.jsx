import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useCountries } from '../../contexts/CountriesContext';
import CountryItem from './CountryItem';
import Pagination from '../Pagination';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    gap: 2rem;
    padding: 1.5rem 0 0;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 4rem;
  }
`;

const ITEMS_PER_PAGE = 24;

const CountriesList = () => {
  const { isLoading, getRenderData } = useCountries();
  const [currentPage, setCurrentPage] = useState(1);

  const renderData = useMemo(() => getRenderData() || [], [getRenderData]);
  const totalItems = renderData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  const currentPageData = useMemo(() => {
    const startIndex = ITEMS_PER_PAGE * (currentPage - 1);
    const endIndex = Math.min(ITEMS_PER_PAGE * currentPage, totalItems);
    return renderData.slice(startIndex, endIndex);
  }, [renderData, currentPage, totalItems]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        <Container>
          <List>
            {currentPageData.map((item) => (
              <CountryItem key={item.name} data={item} />
            ))}
          </List>
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default CountriesList;
