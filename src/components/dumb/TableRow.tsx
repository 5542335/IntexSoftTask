import styled from 'styled-components';
import { FC } from 'react';

interface StyledTableHeaderTitleProps {
  flexBasis?: number;
}

interface TableRowProps {
  columns: Array<any>;
  columnsWidth: number[];
}

export const StyledTableRow = styled.div`
  font-size: 14px;
  line-height: 17px;

  color: #404851;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(64, 72, 81, 0.1);
`;

const StyledTableItem = styled.div<StyledTableHeaderTitleProps>`
  display: flex;
  flex-basis: ${(props) => `${props.flexBasis}px`};
`;

export const TableRow: FC<TableRowProps> = ({ columns, columnsWidth }) => (
  <StyledTableRow>
    {columns.map((column, index) => {
      return (
        <StyledTableItem key={column} flexBasis={columnsWidth[index]}>
          {column}
        </StyledTableItem>
      );
    })}
  </StyledTableRow>
);
