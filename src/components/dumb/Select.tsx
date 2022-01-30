import { FC, useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import arrowDown from '../icons/arrowDown.svg';

const StyledArrowIcon = styled.div<{ rotateImg: boolean }>`
  width: 12px;
  height: 8px;
  background-image: url(${arrowDown});
  margin-left: 10px;
  animation: ${(props) => props.rotateImg && 'rotate 0.5s forwards'};
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

export const StyledSelect = styled.button.attrs({ type: 'button' })`
  font-size: 14px;
  line-height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #3386d9;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
`;

export const StyledOptionsWrapper = styled.ul`
  position: absolute;
  flex-direction: column;
  padding: 0;
  margin: 0;
  align-self: flex-end;
  min-width: 160px;
  max-height: 150px;
  overflow-x: hidden;
  background: #fff;
  border: 1px solid #00000019;
  box-sizing: border-box;
  box-shadow: 2px 4px 12px #0000001e;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;
  ::-webkit-scrollbar {
    width: 0;
  }
  display: ${(props) => props.hidden && 'none'};
`;

const StyledOption = styled.li`
  font-size: 14px;
  line-height: 17px;
  padding: 16px 0 16px 24px;
  list-style-type: none;
  :hover {
    color: #3386d9;
  }
  display: ${(props) => props.hidden && 'none'};
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledCurrentSelectWrapper = styled.div<{ isActive: boolean | any }>`
  ${(props) =>
    props.isActive &&
    css`
      :before {
        content: 'Choose department';

        @media (max-width: 480px) {
          content: 'Department';
        }
      }
    `}
`;

interface SelectProps {
  currentSelect: string;
  items: string[];
  onChange: (value: string) => void;
  defaultWorkplace: string;
}

export const Select: FC<SelectProps> = ({ currentSelect, items, onChange, defaultWorkplace }) => {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const handleClickOption = useCallback(
    (selectedOption: string) => () => {
      onChange(selectedOption);
      setIsOpenOptions(false);
    },
    [onChange],
  );

  const handleOpenOptions = useCallback(() => {
    setIsOpenOptions(!isOpenOptions);
  }, [isOpenOptions]);

  const options = useMemo(
    () =>
      items.map((department) => (
        <StyledOption key={department} onClick={handleClickOption(department)} hidden={department === currentSelect}>
          {department}
        </StyledOption>
      )),
    [currentSelect, handleClickOption, items],
  );

  return (
    <StyledSelectWrapper>
      <StyledSelect onClick={handleOpenOptions}>
        <StyledCurrentSelectWrapper isActive={!currentSelect}>{currentSelect}</StyledCurrentSelectWrapper>
        <StyledArrowIcon rotateImg={isOpenOptions} />
      </StyledSelect>
      <StyledOptionsWrapper hidden={!isOpenOptions}>
        {isOpenOptions && currentSelect && (
          <StyledOption onClick={handleClickOption('')}>{defaultWorkplace}</StyledOption>
        )}
        {isOpenOptions && options}
      </StyledOptionsWrapper>
    </StyledSelectWrapper>
  );
};
