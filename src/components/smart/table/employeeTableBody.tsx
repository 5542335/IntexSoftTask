import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { ModalData } from '../../dumb/ModalContent';

interface StyledTextProps {
  textColor?: string;
  backgroundColor?: string;
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.textColor ? `${props.textColor}` : '#404851')};
  margin: 0;
`;

export const StyledLogo = styled.img`
  border-radius: 16px;
`;

export const StyledChipIcon = styled.div`
  cursor: pointer;
`;

export const StyledBuildingIcon = styled(StyledChipIcon)`
  width: 18px;
  height: 18px;
  background-image: url('building.svg');
`;
export const StyledTrashIcon = styled(StyledChipIcon)`
  width: 14px;
  height: 18px;
  background-image: url('trash.svg');
`;

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

export const StyledChip = styled.div<StyledTextProps>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : '#f1f8ff')};
  padding: 8px 12px;
  border-radius: 16px;
`;

export const getEmployeeTableBody = (
  setShowModal: Dispatch<SetStateAction<boolean>>,
  setModalData: Dispatch<SetStateAction<ModalData | undefined>>,
) => {
  const UserLogoItem = ({ logo }: { logo: string }) => (
    <StyledLogoWrapper>
      <StyledLogo src={logo} alt="logo icon" />
    </StyledLogoWrapper>
  );

  const UserNameItem = ({ name }: { name: string }) => (
    <StyledNameWrapper>
      <StyledText>{name}</StyledText>
    </StyledNameWrapper>
  );

  const UserPositionItem = ({ position }: { position: string }) => (
    <StyledPositionWrapper>
      <StyledText>{position}</StyledText>
    </StyledPositionWrapper>
  );

  const UserDepartmentItem = ({ department }: { department: string }) => (
    <StyledDepartmentWrapper>
      <StyledText textColor="#3386D9">{department}</StyledText>
    </StyledDepartmentWrapper>
  );

  const UserWorkplaceItem = ({ id, logo, name, workplace }: any) => {
    const handleDeleteChip = (wplace: string) => () => {
      setShowModal(true);
      setModalData({ id, logo, name, workplace: wplace });
    };
    return (
      <StyledWorkplaceWrapper>
        {workplace?.length ? (
          workplace.map((wplace: string) => {
            return (
              <StyledChip key={wplace}>
                {window.innerWidth < 480 && <StyledBuildingIcon />}
                <StyledText textColor="#3386D9">{wplace}</StyledText>
                <StyledTrashIcon onClick={handleDeleteChip(wplace)} />
              </StyledChip>
            );
          })
        ) : (
          <StyledChip backgroundColor="#FAFAFA">
            <StyledText textColor="#CE5347">No workplace</StyledText>
          </StyledChip>
        )}
      </StyledWorkplaceWrapper>
    );
  };

  return [UserLogoItem, UserNameItem, UserPositionItem, UserDepartmentItem, UserWorkplaceItem];
};
