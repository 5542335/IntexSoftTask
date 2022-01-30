import { FC, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { StyledText } from './employeeTableBody';
import leftEndArrow from '../../icons/leftEndArrow.svg';
import leftArrow from '../../icons/leftArrow.svg';
import rightArrow from '../../icons/rightArrow.svg';
import rightEndArrow from '../../icons/rightEndArrow.svg';

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
  align-self: center;
  justify-content: center;
  border: none;
  margin-left: 30px;
  width: 14px;
  height: 12px;
  background-image: url(${(props) => props.bgImage});
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: default;
    `}
`;
export const Pagination: FC<PaginationProps> = ({ paginationProps }) => {
  const { offset, setOffset, rowsPerPage, totalRows } = paginationProps;

  const handleClick = useCallback(
    (event) => {
      switch (event.target.id) {
        case 'first-page':
          setOffset(0);
          break;
        case 'prev-page':
          setOffset((prev: number) => prev - rowsPerPage);
          break;
        case 'next-page':
          setOffset((prev: number) => prev + rowsPerPage);
          break;
        case 'last-page':
          if (Number.isInteger(totalRows / rowsPerPage)) {
            setOffset(Math.floor(totalRows / rowsPerPage) * rowsPerPage - rowsPerPage);
          } else {
            setOffset(Math.floor(totalRows / rowsPerPage) * rowsPerPage);
          }
          break;
        default:
          throw new Error('Что-то пошло не так');
      }
    },
    [rowsPerPage, setOffset, totalRows],
  );
  return (
    <StyledPagination onClick={handleClick}>
      <StyledText>{`${totalRows ? offset + 1 : offset} - ${
        offset + rowsPerPage >= totalRows ? totalRows : offset + rowsPerPage
      } of ${totalRows}`}</StyledText>
      <StyledArrowButton disabled={offset === 0} id="first-page" bgImage={leftEndArrow} />
      <StyledArrowButton disabled={offset === 0} id="prev-page" bgImage={leftArrow} />
      <StyledArrowButton disabled={offset + rowsPerPage >= totalRows} id="next-page" bgImage={rightArrow} />
      <StyledArrowButton disabled={offset + rowsPerPage >= totalRows} id="last-page" bgImage={rightEndArrow} />
    </StyledPagination>
  );
};
