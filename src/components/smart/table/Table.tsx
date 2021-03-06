import styled from 'styled-components';
import { Dispatch, FC, SetStateAction } from 'react';

import { TableHeader, TableHeaderProps } from './TableHeader';
import { TableBody, TableBodyProps } from './TableBody';
import { Pagination } from './Pagination';

export interface TableProps<T> extends TableBodyProps<T>, TableHeaderProps {
  paginationProps: {
    offset: number;
    setOffset: Dispatch<SetStateAction<number>>;
    rowsPerPage: number;
    totalRows: number;
  };
}

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table: FC<TableProps<any>> = ({ data, columns, columnTitles, paginationProps, onSort, sortedField }) => {
  return (
    <StyledTable>
      <TableHeader columnTitles={columnTitles} onSort={onSort} sortedField={sortedField} />
      <TableBody data={data} columns={columns} />
      <Pagination paginationProps={paginationProps} />
    </StyledTable>
  );
};
