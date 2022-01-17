import styled from 'styled-components';

interface StyledTableHeaderTitleProps {
  flexBasis?: number;
}

interface TableDataProps {
  id: number;
}

interface ColumnProps {
  Content: (arg: any) => JSX.Element | null;
  width: number;
}

export interface TableRowProps<T> {
  columns: ColumnProps[];
  item?: T & TableDataProps;
}

export const StyledTableRow = styled.div`
  font-size: 14px;
  line-height: 17px;

  color: #404851;
  display: flex;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(64, 72, 81, 0.1);
`;

export const StyledTableItem = styled.div<StyledTableHeaderTitleProps>`
  display: flex;
  flex-basis: ${(props) => `${props.flexBasis}px`};
`;

export const TableRow = <T,>({ columns, item }: TableRowProps<T>) => (
  <StyledTableRow>
    {columns.map(({ Content, width }) => {
      return (
        <StyledTableItem key={item?.id} flexBasis={width}>
          {Content && <Content {...item} />}
        </StyledTableItem>
      );
    })}
  </StyledTableRow>
);
