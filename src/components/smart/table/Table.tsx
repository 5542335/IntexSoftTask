import styled from 'styled-components';
import { FC } from 'react';

import { TableHeader, TableHeaderProps } from './TableHeader';
import { TableBody, TableBodyProps } from './TableBody';
import { Pagination } from './Pagination';

interface TableProps<T> extends TableBodyProps<T>, TableHeaderProps {
  paginationProps: any;
}

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table: FC<TableProps<any>> = ({ data, columns, columnTitles, paginationProps }) => {
  return (
    <StyledTable>
      <TableHeader columnTitles={columnTitles} />
      <TableBody data={data} columns={columns} />
      <Pagination paginationProps={paginationProps} />
    </StyledTable>
  );
};
