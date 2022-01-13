import styled from 'styled-components';

import { users } from '../data';
import { TableRow } from './TableRow';

interface StyledBodyTextProps {
  textColor?: string;
}

const StyledBodyText = styled.p<StyledBodyTextProps>`
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.textColor ? `${props.textColor}` : '#404851')};

  margin: 0;
`;

const StyledLogo = styled.img`
  margin: 12px 12px 12px 0;
`;

const StyledChipIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 56px;
`;

const StyledChip = styled.div`
  display: flex;
  padding: 8px 20px 8px 16px;
  background: #f1f8ff;
  border-radius: 16px;
  margin: 3px 0;
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const TableBody = () => {
  const userNameItem = (logo: string, name: string) => (
    <StyledItemWrapper>
      <StyledLogo src={logo} alt="logo icon" />
      <StyledBodyText>{name}</StyledBodyText>
    </StyledItemWrapper>
  );

  const userPositionItem = (position: string) => (
    <StyledItemWrapper>
      <StyledBodyText>{position}</StyledBodyText>
    </StyledItemWrapper>
  );

  const userDepartmentItem = (department: string) => (
    <StyledItemWrapper>
      <StyledBodyText textColor="#3386D9">{department}</StyledBodyText>
    </StyledItemWrapper>
  );

  const userWorkplaceItem = (workplaces: string[]) => (
    <StyledItemWrapper>
      {workplaces.map((workplace) => {
        return (
          <StyledChip key={workplace}>
            <StyledBodyText>{workplace}</StyledBodyText>
            <StyledChipIcon src="trash.svg" alt="delete chip icon" />
          </StyledChip>
        );
      })}
    </StyledItemWrapper>
  );
  return (
    <>
      {users.map((user) => {
        return (
          <TableRow
            key={user.id}
            columns={[
              userNameItem(user.logo, user.name),
              userPositionItem(user.position),
              userDepartmentItem(user.department),
              userWorkplaceItem(user.workplace),
            ]}
            columnsWidth={[236, 162, 136, 576]}
          />
        );
      })}
    </>
  );
};
