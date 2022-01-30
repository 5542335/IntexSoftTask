import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

import x from '../icons/x.svg';
import modalImage from '../icons/modalImage.svg';

export interface ModalData {
  id: number | string | any;
  logo: string;
  name: string;
  workplace: string[] | string;
}

export interface ModalContentProps {
  modalText: string;
  modalData: ModalData | undefined;
  onDelete: () => void;
  onClose: (arg?: any) => void | Dispatch<SetStateAction<ModalData | undefined>>;
}

const StyledModalImage = styled.div`
  display: flex;
  position: relative;
  height: 100px;
  width: 100%;
  background-image: url(${modalImage});
  background-repeat: no-repeat;
  border-radius: 6px 6px 0 0;
`;

const StyledClose = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 456px;
  top: 24px;
  width: 16px;
  height: 16px;
  background-image: url(${x});
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const StyledModalText = styled.p`
  font-size: 18px;
  line-height: 130%;
  margin: 24px 66px;
  text-align: center;
  color: #404851;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  margin: 0 32px;
  padding-top: 12px;
  border-top: 1px solid #40485133;
`;

const StyledAvatar = styled.div<{ bgImage: string | undefined }>`
  width: 32px;
  height: 32px;
  margin-right: 14px;
  background-image: url(${(props) => props.bgImage});
`;

const StyledName = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  color: #404851;
`;

const StyledWorkplace = styled(StyledName)`
  margin-left: auto;
`;

const StyledButtons = styled.div`
  display: flex;
  margin: 40px 32px 24px;
  justify-content: flex-end;
`;

const StyledButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  font-size: 16px;
  line-height: 19px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const StyledCancelButton = styled(StyledButton)`
  background-color: #fff;
  color: #404851;
  padding: 14px 54px;
`;

const StyledConfirmButton = styled(StyledButton)`
  padding: 14px 44px;
  background-color: #fff9f9;
  color: #ce5347;
  border: 1px solid #ce5347;
  box-sizing: border-box;
  box-shadow: 0 1px 6px #0000001e;
`;

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 328px;
  flex-basis: 496px;
  background-color: #fff;
  box-shadow: 2px 4px 12px #0000001e;
  border-radius: 6px;

  @media (max-width: 768px) {
    flex-basis: 460px;
    ${StyledClose} {
      left: 420px;
    }
  }

  @media (max-width: 480px) {
    width: 328px;
    min-height: 226px;
    ${StyledModalImage} {
      display: none;
    }
    ${StyledCancelButton} {
      padding: 14px 27px;
    }
    ${StyledConfirmButton} {
      padding: 16px 26px;
      font-size: 14px;
      line-height: 17px;
      box-sizing: border-box;
    }
    ${StyledButtons} {
      margin: 40px 16px 16px;
    }
    ${StyledModalText} {
      font-size: 16px;
      margin: 16px;
    }
    ${StyledInfoContainer} {
      margin: 0 16px;
    }
    ${StyledName} {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export const ModalContent: FC<ModalContentProps> = ({ modalText, modalData, onDelete, onClose }) => {
  return (
    <StyledModalContent>
      <StyledModalImage>
        <StyledClose onClick={onClose} />
      </StyledModalImage>
      <StyledModalText> {modalText}</StyledModalText>
      <StyledInfoContainer>
        <StyledAvatar bgImage={modalData?.logo} />
        <StyledName>{modalData?.name}</StyledName>
        <StyledWorkplace>{modalData?.workplace}</StyledWorkplace>
      </StyledInfoContainer>
      <StyledButtons>
        <StyledCancelButton onClick={onClose}>Cancel</StyledCancelButton>
        <StyledConfirmButton onClick={onDelete}>Unload an employee</StyledConfirmButton>
      </StyledButtons>
    </StyledModalContent>
  );
};
