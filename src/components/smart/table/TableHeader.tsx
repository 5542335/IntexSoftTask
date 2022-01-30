import { FC } from 'react';
import styled from 'styled-components';

import { titleContent } from './titleContent';
import { TableRow } from './TableRow';
import { ISortedField } from '../../../hooks/useSort';

export interface TableHeaderProps {
  columnTitles: string[];
  onSort: (title: string) => () => void;
  sortedField: ISortedField;
}

export const StyledTableHeader = styled.div``;

export const TableHeader: FC<TableHeaderProps> = ({ columnTitles, onSort, sortedField }) => {
  const headerItems = columnTitles.map((title) => titleContent(title, sortedField, onSort));
  return (
    <StyledTableHeader>
      <TableRow columns={headerItems} />
    </StyledTableHeader>
  );
};
