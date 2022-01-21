import styled from 'styled-components';
import { FC, useCallback } from 'react';

export interface PaginationProps {
  paginationProps: any;
}

interface ArrowBtn {
  bgImage: string;
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 22px 10px 30px 0;
`;

const StyledArrowButton = styled.button<ArrowBtn>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  margin-left: 30px;
  width: 14px;
  height: 12px;
  background-image: url(${(props) => props.bgImage});
  background-color: transparent;
  background-repeat: no-repeat;
`;
export const Pagination: FC<PaginationProps> = () => {
  const handleClick = useCallback((e) => {
    console.log(e.target.id);
  }, []);
  return (
    <StyledPagination onClick={handleClick}>
      <StyledArrowButton bgImage="leftEndArrow.svg" />
      <StyledArrowButton bgImage="leftArrow.svg" />
      <StyledArrowButton bgImage="rightArrow.svg" />
      <StyledArrowButton bgImage="rightEndArrow.svg" />
    </StyledPagination>
  );
};
