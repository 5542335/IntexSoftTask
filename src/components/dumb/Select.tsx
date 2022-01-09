import { FC, useState } from "react";
import styled from "styled-components";

export const StyledText = styled.p`
    font-family: Lato, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
`;

interface StyledSelectProps {
    hide?: boolean;
}

export const StyledSelect = styled.div<StyledSelectProps>`
    display: flex;
    max-width: 270px;
    min-height: 48px;
    justify-content: center;
    align-items: center;
    
    background-color: #FFFFFF;
    color: #3386D9;
    border: 1px solid #D0E2F6;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;
    :hover {
        border-color: #3386D9;
    }
    display: ${props => props.hide ? 'none' : ''};

    ${StyledText} {
        margin-right: 14px;
    }
`;

export const StyledOptionsWrapper = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    max-height: 144px;
    overflow-x: hidden;
`;

const StyledSelectWrapper = styled.div`
    max-width: 270px;
    width: 100%;
`;

interface SelectProps {
    currentSelect: string;
    items: string[];
    onChange: (value: string) => void;
  }

export const Select: FC<SelectProps> = ({currentSelect, items, onChange}: SelectProps) => {
    const [isOpenOptions, setIsOpenOptions] = useState(false);

const handleClickOption = (selectedOption: string) => () => {
    onChange(selectedOption || 'Choose department');
    setIsOpenOptions(false);
};

    return (
        <StyledSelectWrapper>
            <StyledSelect onClick={() => setIsOpenOptions(!isOpenOptions)}>
                <StyledText>{currentSelect}</StyledText> 
                <img src="arrowButton.png" alt='choose department button'/>
            </StyledSelect>
            <StyledOptionsWrapper>
                {currentSelect !== 'Choose department'
                    && isOpenOptions
                    && <StyledSelect onClick={handleClickOption('')}>All</StyledSelect>
                }
                {isOpenOptions && items.map((department) => {
                    return (
                        <StyledSelect
                            key={department}
                            onClick={handleClickOption(department)}
                            hide={department === currentSelect}
                        >
                            {department}
                        </StyledSelect>
                    )
                })}
            </StyledOptionsWrapper>
        </StyledSelectWrapper>
    )
}