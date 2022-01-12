import styled from 'styled-components';
import { TableRow } from '../dumb/TableRow';

const StyledTitleItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledHeaderTitleText = styled.p`
  font-family: Lato, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #404851;
  user-select: none;
  margin: 0;
`;

const StyledTitleImage = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export const TableHeader = () => {
  const tableColumnsTitle = ['Name', 'Position', 'Department', 'Workplace'];
  const columnsWidth = [236, 162, 136, 576];

  const headerItemsWithIcon = tableColumnsTitle.map((title) => (
    <StyledTitleItemWrapper key={title}>
      <StyledHeaderTitleText>{title}</StyledHeaderTitleText>
      <StyledTitleImage src="sortArrows.svg" alt="table sort icon" />
    </StyledTitleItemWrapper>
  ));

  return <TableRow columns={headerItemsWithIcon} columnsWidth={columnsWidth} />;
};
