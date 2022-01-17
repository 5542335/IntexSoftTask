import styled from 'styled-components';
import { TableRow, TableRowProps } from '../smart/table/TableRow';

export interface TableBodyProps<T> {
  data: TableRowProps<T>['item'][];
  columns: TableRowProps<T>['columns'];
}

export const StyledTableBodyWrapper = styled.div``;

export const TableBody = <T,>({ data, columns }: TableBodyProps<T>) => {
  return (
    <StyledTableBodyWrapper>
      {data.map((item) => {
        return <TableRow key={item?.id} columns={columns} item={item} />;
      })}
    </StyledTableBodyWrapper>
  );
};
