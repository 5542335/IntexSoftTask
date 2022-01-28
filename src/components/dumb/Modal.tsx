import { Dispatch, FC, MouseEventHandler, SetStateAction, useCallback } from 'react';
import styled, { css } from 'styled-components';

interface ModalProps {
  isActive: boolean;
  onClick: MouseEventHandler<HTMLDivElement> & Dispatch<SetStateAction<boolean>>;
}

const StyledModal = styled.div<ModalProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  ${(props) =>
    props.isActive &&
    css`
      background-color: #ebedf180;
      pointer-events: all;
      opacity: 1;
    `}
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal: FC<ModalProps> = ({ isActive, onClick, children }) => {
  const handleClick = useCallback((event) => {
    event.stopPropagation();
  }, []);
  return (
    <StyledModal isActive={isActive} onClick={onClick}>
      <StyledContent onClick={handleClick}>{children}</StyledContent>
    </StyledModal>
  );
};
