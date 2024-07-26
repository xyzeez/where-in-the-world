import styled from 'styled-components';
import { useCountries } from '../../contexts/CountriesContext';
import CountryItem from './CountryItem';
import { useState, useMemo } from 'react';
import Pagination from '../Pagination';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ITEMS_PER_PAGE = 25;

const CountriesList = () => {
  const { getRenderData } = useCountries();
  const [currentPage, setCurrentPage] = useState(1);
  const renderData = useMemo(() => getRenderData(), [getRenderData]);

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
    <Container>
      <List>
        {currentPageData.map((item) => (
          <CountryItem key={item.name} data={item} />
        ))}
      </List>
      <Pagination
        totalPages={totalPages}
        currPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default CountriesList;
