import styled from 'styled-components';

export interface TableDataProps {
  id?: number;
  logo: string;
  name: string;
  position: string;
  department: string;
  workplace: string[];
}

export interface TableRowProps<T> {
  columns: any;
  data?: T & TableDataProps;
}

export const StyledTableRow = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 17px;
  position: relative;
  border-bottom: 1px solid #40485119;
`;

export const StyledTableItem = styled.div`
  display: flex;
`;

export const TableRow = <T,>({ columns, data }: TableRowProps<T>) => (
  <StyledTableRow>
    {columns.map((Component: any, index: number) => {
      return <StyledTableItem key={index}>{Component(data)}</StyledTableItem>;
    })}
  </StyledTableRow>
);
