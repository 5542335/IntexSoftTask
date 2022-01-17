import { FC } from 'react';
import styled from 'styled-components';
import { TableRow } from './TableRow';

interface ColumnTitleProps {
  title: string;
  width: number;
}

export interface TableHeaderProps {
  columnTitles: ColumnTitleProps[];
}

export const StyledTitleItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeaderTitleText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #404851;
  user-select: none;
  margin: 0;
`;

export const StyledTitleImage = styled.img`
  cursor: pointer;
`;

export const StyledTableHeaderWrapper = styled.div``;

const getContent = (title: string) => () => {
  if (title) {
    return (
      <StyledTitleItemWrapper key={title}>
        <StyledHeaderTitleText>{title}</StyledHeaderTitleText>
        <StyledTitleImage src="sortArrows.svg" alt="table sort icon" />
      </StyledTitleItemWrapper>
    );
  }

  return null;
};

export const TableHeader: FC<TableHeaderProps> = ({ columnTitles }: TableHeaderProps) => {
  const headerItemsWithIcon = columnTitles.map(({ width, title }) => ({
    Content: getContent(title),
    width,
  }));

  return (
    <StyledTableHeaderWrapper>
      <TableRow columns={headerItemsWithIcon} />
    </StyledTableHeaderWrapper>
  );
};
