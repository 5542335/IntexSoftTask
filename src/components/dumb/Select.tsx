import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';

export const StyledIcon = styled.img`
    margin-left: 10px;
`;

interface StyledSelectProps {
    hide?: boolean;
}

export const StyledSelect = styled.button<StyledSelectProps>`
  font-family: Lato, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: transparent;
    color: #3386D9;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    :before {
      content: 'Choose department';
    }
    @media (max-width: 480px) {
      :before {
        content: 'Department';
      }
    }
  
    display: ${(props) => (props.hide ? 'none' : '')};
`;

export const StyledOptions = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 270px;
    max-height: 144px;
    overflow-x: hidden;
`;

export const StyledSelectWrapper = styled.div`
`;

interface SelectProps {
    currentSelect: string;
    items: string[];
    // eslint-disable-next-line no-unused-vars
    onChange: (value: string) => void;
  }

// eslint-disable-next-line no-unused-vars
export const Select: FC<SelectProps> = ({ currentSelect, items, onChange }: SelectProps) => {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  // const handleClickOption = (selectedOption: string) => () => {
  //   onChange(selectedOption || 'Choose department');
  //   setIsOpenOptions(false);
  // };

  const handleOpenOptions = useCallback(() => {
    setIsOpenOptions(!isOpenOptions);
  }, [isOpenOptions]);

  return (
    <StyledSelectWrapper>
      <StyledSelect onClick={handleOpenOptions}>
        <StyledIcon src="arrowButton.png" alt="choose department button" />
      </StyledSelect>
      {/* <StyledOptions> */}
      {/*  {currentSelect !== 'Choose department' */}
      {/*              && isOpenOptions */}
      {/*              && <div onClick={handleClickOption('')}>All</div>} */}
      {/*  {isOpenOptions && items.map((department) => ( */}
      {/*    <div */}
      {/*      key={department} */}
      {/*      onClick={handleClickOption(department)} */}
      {/*      hide={department === currentSelect} */}
      {/*    > */}
      {/*      {department} */}
      {/*    </div> */}
      {/*  ))} */}
      {/* </StyledOptions> */}
    </StyledSelectWrapper>
  );
};
