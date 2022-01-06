import { ChangeEvent, FC, useRef, useState } from "react";
import styled from "styled-components";

const StyledIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const StyledInput = styled.input`
    font-family: Lato, Arial, sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #008080;

    width: 88%;
    height: 30px;
    outline: none;
    border: none;
    box-sizing: border-box;
    :focus {
        border-bottom: 1px solid #3386D9;
        background-color: #f8f8f8;
        border-radius: 5px 5px 0 0;
    }
`;

export const StyledLoader = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    :after {
        content: " ";
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 6px solid #D0E2F6;
        border-color: #D0E2F6 transparent #D0E2F6 transparent;
        animation: loader 1.2s linear infinite;
    }
    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
  }
}
`;

const StyledSearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 794px;
    height: 48px;
    background-color: #FFFFFF;
    border: 1px solid #D0E2F6;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;

    ${StyledIcon} {
        margin: 0 8px 0 16px;
    }
    ${StyledLoader} {
        margin: 0 10px 10px;
    }
`;

export const SearchBar: FC = () => {
    const [searchText, setSearchText] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    let textInput: React.RefObject<HTMLInputElement> = useRef(null);

    const handleInput = ({ target: { value } }:ChangeEvent<HTMLInputElement>) => {
        setSearchText(value);

        if (value.length >= 3) {
            setShowLoader(true);
            setTimeout(() => {
                console.log(value);
                setShowLoader(false);
            }, 1000);
        }
    }

    return (
        <StyledSearchBarWrapper onClick={() => textInput.current?.focus()}>
            <StyledIcon src="search.png" alt="search icon"/>
            <StyledInput onChange={handleInput} ref={textInput} placeholder='Search of emploeeys' />
            {showLoader && <StyledLoader />}
        </StyledSearchBarWrapper>
    )
}