import { FC, useCallback } from 'react';
import styled from 'styled-components';
import { TableRow } from './TableRow';

export interface TableHeaderProps {
  columnTitles: string[];
  onSort: (arg: any) => void;
  sortedField: {};
}

export const StyledTitleItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledHeaderTitleText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #404851;
  user-select: none;
  margin: 0;
`;

export const StyledHeaderTitleImage = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  background-image: url('sortArrows.svg');
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const StyledTableHeader = styled.div``;

const titleContent = (title: string, sortedField: any, onSort: (arg: {}) => void) => () => {
  const handleClick = useCallback(() => {
    if (sortedField.order) {
      onSort({ field: title, order: `${sortedField.order === 'ASC' ? 'DESC' : 'ASC'}` });
    } else {
      onSort({ field: title, order: 'ASC' });
    }
  }, []);
  return (
    <StyledTitleItemWrapper key={title}>
      <StyledHeaderTitleText>{title}</StyledHeaderTitleText>
      <StyledHeaderTitleImage onClick={handleClick} />
    </StyledTitleItemWrapper>
  );
};

export const TableHeader: FC<TableHeaderProps> = ({ columnTitles, sortedField, onSort }) => {
  const headerItems = columnTitles.map((title) => titleContent(title, sortedField, onSort));
  return (
    <StyledTableHeader>
      <TableRow columns={headerItems} />
    </StyledTableHeader>
  );
};
