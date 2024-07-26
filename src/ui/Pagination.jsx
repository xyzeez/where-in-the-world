import { useMemo } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Ellipsis = styled.span`
  align-self: center;
`;

const Pagination = ({ totalPages, currPage, onPageChange }) => {
  const pageNumbers = useMemo(() => {
    const generatePageNumbers = () => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      let pages = [1];

      if (currPage <= 4) {
        pages = [...pages, 2, 3, 4, 5];
        if (totalPages > 6) {
          pages.push('...');
        }
        pages.push(totalPages);
      } else if (currPage > totalPages - 4) {
        if (totalPages > 6) {
          pages.push('...');
        }
        pages = [
          ...pages,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [...pages, '...', currPage - 1, currPage, currPage + 1];
        if (currPage + 2 < totalPages) {
          pages.push('...');
        }
        if (currPage + 1 < totalPages) {
          pages.push(totalPages);
        }
      }

      return pages;
    };

    return generatePageNumbers();
  }, [totalPages, currPage]);

  return (
    <>
      {totalPages > 1 ? (
        <Container>
          <Button
            disabled={currPage === 1}
            onClick={() => onPageChange(currPage - 1)}
            aria-label="Go to previous page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Button>
          {pageNumbers.map((num, index) =>
            num === '...' ? (
              <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
            ) : (
              <Button
                key={num}
                onClick={() => onPageChange(num)}
                aria-current={num === currPage ? 'page' : undefined}
                aria-label={`Go to page ${num}`}>
                {num}
              </Button>
            )
          )}
          <Button
            disabled={currPage === totalPages}
            onClick={() => onPageChange(currPage + 1)}
            aria-label="Go to next page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
        </Container>
      ) : null}
    </>
  );
};

export default Pagination;
