import styled from 'styled-components';

interface StyledTableHeaderTitleProps {
  flexBasis?: number;
}

export interface TableDataProps {
  id?: number;
  logo: string;
  name: string;
  position: string;
  department: string;
  workplaces: string[];
}

interface ColumnProps {
  Content: (arg: any) => JSX.Element | null;
  width: number;
}

export interface TableRowProps<T> {
  columns: ColumnProps[];
  data?: T & TableDataProps;
}

export const StyledTableRow = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 17px;
  position: relative;
  border-bottom: 1px solid #40485119;
`;

export const StyledTableItem = styled.div<StyledTableHeaderTitleProps>`
  display: flex;
  flex-basis: ${(props) => `${props.flexBasis}px`};
`;

export const TableRow = <T,>({ columns, data }: TableRowProps<T>) => (
  <StyledTableRow>
    {columns.map(({ Content, width }) => {
      return (
        <StyledTableItem key={width} flexBasis={width}>
          {Content && <Content {...data} />}
        </StyledTableItem>
      );
    })}
  </StyledTableRow>
);
