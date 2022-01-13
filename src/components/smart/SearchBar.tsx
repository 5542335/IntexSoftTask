import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { StyledLoader } from '../dumb/Loader';

const StyledSearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

export const StyledInput = styled.input`
  font-size: 14px;
  line-height: 130%;

  width: 100%;
  height: 30px;
  outline: none;
  border: none;
  box-sizing: border-box;
`;

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #ffffff;
  border: 1px solid #d0e2f6;
  box-sizing: border-box;
  border-radius: 8px;

  ${StyledSearchIcon} {
    margin: 0 8px 0 16px;
  }
  ${StyledLoader} {
    margin: 0 10px 10px;
  }
`;

export const StyledSearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

export const SearchBar: FC = () => {
  const [, setSearchText] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const handleInput = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
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
      <StyledSearchBar>
        <StyledLabel htmlFor="search-input">
          <StyledSearchIcon src="search.svg" alt="search icon" />
        </StyledLabel>
        <StyledInput id="search-input" maxLength={60} onChange={handleInput} placeholder="Search of employees" />
        {showLoader && <StyledLoader />}
      </StyledSearchBar>
    </StyledSearchBarWrapper>
  );
};
