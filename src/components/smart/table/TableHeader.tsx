import { FC, useCallback } from 'react';
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

const titleContent = (title: string) => () => {
  const handleClick = useCallback(() => {
    console.log(title);
  }, []);
  return (
    <StyledTitleItemWrapper key={title}>
      <StyledHeaderTitleText>{title}</StyledHeaderTitleText>
      <StyledHeaderTitleImage onClick={handleClick} />
    </StyledTitleItemWrapper>
  );
};

export const TableHeader: FC<TableHeaderProps> = ({ columnTitles }) => {
  const headerItems = columnTitles.map(({ width, title }) => ({
    Content: titleContent(title),
    width,
  }));

  return (
    <StyledTableHeader>
      <TableRow columns={headerItems} />
    </StyledTableHeader>
  );
};
