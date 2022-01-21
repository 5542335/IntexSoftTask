import styled from 'styled-components';
import { TableRow, TableRowProps } from './TableRow';

export interface TableBodyProps<T> {
  data: TableRowProps<T>['data'][];
  columns: TableRowProps<T>['columns'];
}

export const StyledTableBodyWrapper = styled.div``;

export const TableBody = <T,>({ data, columns }: TableBodyProps<T>) => {
  return (
    <StyledTableBodyWrapper>
      {data.map((dataItem) => {
        return <TableRow key={dataItem?.id} columns={columns} data={dataItem} />;
      })}
    </StyledTableBodyWrapper>
  );
};
