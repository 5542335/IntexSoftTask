import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
  margin-left: 10px;
`;

interface StyledOptionsProps {
  hidden?: boolean;
}

export const StyledSelect = styled.button`
  font-size: 14px;
  line-height: 17px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  color: #3386d9;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
`;

export const StyledOption = styled.div<StyledOptionsProps>`
  font-size: 14px;
  line-height: 17px;
  padding: 16px 0 16px 24px;
  margin: 0;
  list-style-type: none;
  :hover {
    color: #3386d9;
  }

  display: ${(props) => (props.hidden ? 'none' : '')};
`;

export const StyledOptionsWrapper = styled.ul<StyledOptionsProps>`
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 0;
  margin: 0;
  align-self: flex-end;
  min-width: 160px;
  max-height: 150px;
  overflow-x: hidden;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  ::-webkit-scrollbar {
    width: 0;
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
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  selectButtonText: string;
}

export const Select: FC<SelectProps> = ({ currentSelect, items, onChange, selectButtonText }: SelectProps) => {
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
        <StyledIcon src={isOpenOptions ? 'arrowUp.svg' : 'arrowDown.svg'} alt="choose department button" />
      </StyledSelect>
      <StyledOptionsWrapper hidden={!isOpenOptions}>
        {currentSelect !== ('Choose department' || 'Department') && isOpenOptions && (
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
