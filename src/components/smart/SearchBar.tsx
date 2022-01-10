import React, {
  ChangeEvent, FC, useCallback, useState,
} from 'react';
import styled from 'styled-components';

const StyledSearchIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

export const StyledInput = styled.input`
    font-family: Lato, Arial, sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #008080;

    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    box-sizing: border-box;
`;

export const StyledLoader = styled.div`
    display: inline-block;
    position: relative;
    right: 10px;
    width: 20px;
    height: 20px;
    :after {
        content: " ";
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 6px solid;
        border-color: #D0E2F6 transparent;
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

export const StyledSearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    background-color: #FFFFFF;
    border: 1px solid #D0E2F6;
    box-sizing: border-box;
    border-radius: 8px;

    ${StyledSearchIcon} {
        margin: 0 8px 0 16px;
    }
    ${StyledLoader} {
        margin: 0 10px 10px;
    }
`;

export const SearchBar: FC = () => {
  const [, setSearchText] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const handleInput = useCallback(({ target: { value } }:ChangeEvent<HTMLInputElement>) => {
    setSearchText(value);

    if (value.length >= 3) {
      setShowLoader(true);
      setTimeout(() => {
        console.log(value);
        setShowLoader(false);
      }, 1000);
    }
  }, []);

  return (
    <StyledSearchBarWrapper>
      <StyledLabel htmlFor="search-input">
        <StyledSearchIcon src="search.png" alt="search icon" />
      </StyledLabel>
      <StyledInput id="search-input" maxLength={60} onChange={handleInput} placeholder="Search of employees" />
      {showLoader && <StyledLoader />}
    </StyledSearchBarWrapper>
  );
};
