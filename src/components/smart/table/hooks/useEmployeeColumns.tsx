import styled from 'styled-components';
import { useMemo } from 'react';

interface StyledBodyTextProps {
  fontSize?: string;
  lineHeight?: string;
  textColor?: string;
  backgroundColor?: string;
}

export const StyledBodyText = styled.p<StyledBodyTextProps>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '14px')};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}` : '17px')};
  color: ${(props) => (props.textColor ? `${props.textColor}` : '#404851')};
  margin: 0;
`;

export const StyledLogo = styled.img``;

export const StyledChipIcon = styled.img`
  cursor: pointer;
`;

export const StyledBuildingIcon = styled(StyledChipIcon)``;
export const StyledTrashIcon = styled(StyledChipIcon)``;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledLogoWrapper = styled(StyledItemWrapper)``;
export const StyledNameWrapper = styled(StyledItemWrapper)``;
export const StyledPositionWrapper = styled(StyledItemWrapper)``;
export const StyledDepartmentWrapper = styled(StyledItemWrapper)``;
export const StyledWorkplaceWrapper = styled(StyledItemWrapper)``;

export const StyledChip = styled.div<StyledBodyTextProps>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : '#f1f8ff')};
  border-radius: 16px;
`;

export const useEmployeeColumns = () => {
  const userLogoItem = ({ logo }: { logo: string }) => (
    <StyledLogoWrapper>
      <StyledLogo src={logo} alt="logo icon" />
    </StyledLogoWrapper>
  );

  const userNameItem = ({ name }: { name: string }) => (
    <StyledNameWrapper>
      <StyledBodyText>{name}</StyledBodyText>
    </StyledNameWrapper>
  );

  const userPositionItem = ({ position }: { position: string }) => (
    <StyledPositionWrapper>
      <StyledBodyText fontSize="12px" lineHeight="14px">
        {position}
      </StyledBodyText>
    </StyledPositionWrapper>
  );

  const userDepartmentItem = ({ department }: { department: string }) => (
    <StyledDepartmentWrapper>
      <StyledBodyText textColor="#3386D9">{department}</StyledBodyText>
    </StyledDepartmentWrapper>
  );

  const userWorkplaceItem = ({ workplaces }: { workplaces: string[] }) => (
    <StyledWorkplaceWrapper>
      {workplaces.length ? (
        workplaces.map((workplace) => {
          return (
            <StyledChip key={workplace}>
              {window.innerWidth < 480 && <StyledBuildingIcon src="building.svg" alt="delete chip icon" />}
              <StyledBodyText textColor="#3386D9">{workplace}</StyledBodyText>
              <StyledTrashIcon src="trash.svg" alt="delete chip icon" />
            </StyledChip>
          );
        })
      ) : (
        <StyledChip backgroundColor="#FAFAFA">
          <StyledBodyText textColor="#CE5347">No workplace</StyledBodyText>
        </StyledChip>
      )}
    </StyledWorkplaceWrapper>
  );

  return useMemo(
    () => [
      { Content: userLogoItem, width: 32 },
      { Content: userNameItem, width: 204 },
      { Content: userPositionItem, width: 162 },
      { Content: userDepartmentItem, width: 136 },
      { Content: userWorkplaceItem, width: 576 },
    ],
    [],
  );
};
