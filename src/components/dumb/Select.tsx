import { FC } from "react";
import styled from "styled-components";

export const StyledSelect = styled.select`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    background-color: #FFFFFF;
    border: 1px solid #D0E2F6;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px 55px;
    max-width: 270px;
    color: #3386D9;
    outline: none;
    &:hover {
        cursor: pointer;
        border: 2px solid 
    }

    option {
        color: #3386D9;
        background-color: #f1f1f1;
    }
    option:checked {
        background: #808080;
        color: #ffffff;
}
`;

interface SelectProps {
    currentSelect: string;
    items: string[];
    onChange: (value: string) => void;
  }


export const Select: FC<SelectProps> = ({currentSelect, items, onChange}: SelectProps) => {
    return (
        <StyledSelect onChange={(e) => onChange(e.target.value)}>
            <option hidden>Choose department</option>
            {items.map((department) => {
               return (
                    <option
                        key={department}
                        hidden={currentSelect === department}
                    >
                        {department}
                    </option>
               )
            })}
        </StyledSelect>
    )
}