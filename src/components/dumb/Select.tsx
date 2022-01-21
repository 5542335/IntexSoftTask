import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

interface ArrowIconProps {
  rotateImg: boolean;
}

const StyledArrowIcon = styled.div<ArrowIconProps>`
  width: 12px;
  height: 8px;
  background-image: url('./arrowDown.svg');
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

export const StyledSelect = styled.button.attrs(() => ({ type: 'button' }))`
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
  display: ${(props) => (props.hidden ? 'none' : '')};
`;

const StyledOption = styled.li`
  font-size: 14px;
  line-height: 17px;
  padding: 16px 0 16px 24px;
  list-style-type: none;
  :hover {
    color: #3386d9;
  }
  display: ${(props) => (props.hidden ? 'none' : '')};
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface SelectProps {
  currentSelect: string;
  items: string[];
  onChange: (value: string) => void;
  selectButtonText: string;
}

export const Select: FC<SelectProps> = ({ currentSelect, items, onChange, selectButtonText }) => {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const handleClickOption = (selectedOption: string) => () => {
    onChange(selectedOption || selectButtonText);
    setIsOpenOptions(false);
  };

  const handleOpenOptions = useCallback(() => {
    setIsOpenOptions(!isOpenOptions);
  }, [isOpenOptions]);

  return (
    <StyledSelectWrapper>
      <StyledSelect onClick={handleOpenOptions}>
        {currentSelect}
        <StyledArrowIcon rotateImg={isOpenOptions} />
      </StyledSelect>
      <StyledOptionsWrapper hidden={!isOpenOptions}>
        {currentSelect !== selectButtonText && isOpenOptions && (
          <StyledOption onClick={handleClickOption('')}>All</StyledOption>
        )}
        {isOpenOptions &&
          items.map((department) => (
            <StyledOption
              key={department}
              onClick={handleClickOption(department)}
              hidden={department === currentSelect}
            >
              {department}
            </StyledOption>
          ))}
      </StyledOptionsWrapper>
    </StyledSelectWrapper>
  );
};
