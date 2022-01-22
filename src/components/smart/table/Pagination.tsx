import styled from 'styled-components';
import { FC, useCallback } from 'react';
import { StyledText } from './employeeTableBody';
import { users } from '../../../data';

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
  opacity: ${(props) => props.disabled && 0.5};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;
export const Pagination: FC<PaginationProps> = ({ paginationProps }) => {
  const { setTableData, offset, setOffset, rowsPerPage, totalRows } = paginationProps;

  const handleClick = useCallback(
    (event) => {
      switch (event.target.id) {
        case 'first-page':
          setTableData(users.slice(0, rowsPerPage));
          setOffset(rowsPerPage);
          break;
        case 'prev-page':
          setTableData(users.slice(offset - 2 * rowsPerPage, offset - rowsPerPage));
          setOffset((prev: number) => prev - rowsPerPage);
          break;
        case 'next-page':
          setTableData(users.slice(offset, offset + rowsPerPage));
          setOffset((prev: number) => prev + rowsPerPage);
          break;
        case 'last-page':
          setOffset(Math.ceil(totalRows / rowsPerPage) * rowsPerPage);

          if (Math.floor(totalRows / rowsPerPage) * rowsPerPage === users.length) {
            setTableData(users.slice(Math.floor(totalRows / rowsPerPage) * rowsPerPage - rowsPerPage, users.length));
            break;
          }
          setTableData(users.slice(Math.floor(totalRows / rowsPerPage) * rowsPerPage, users.length));
          break;
        default:
          throw new Error('Что-то пошло не так');
      }
    },
    [offset, rowsPerPage, setOffset, setTableData, totalRows],
  );
  return (
    <StyledPagination onClick={handleClick}>
      <StyledText>
        {`${offset - rowsPerPage + 1} - 
               ${offset > users.length ? users.length : offset} of 
               ${totalRows}`}
      </StyledText>
      <StyledArrowButton disabled={offset === rowsPerPage} id="first-page" bgImage="leftEndArrow.svg" />
      <StyledArrowButton disabled={offset === rowsPerPage} id="prev-page" bgImage="leftArrow.svg" />
      <StyledArrowButton disabled={offset >= users.length} id="next-page" bgImage="rightArrow.svg" />
      <StyledArrowButton disabled={offset >= users.length} id="last-page" bgImage="rightEndArrow.svg" />
    </StyledPagination>
  );
};
