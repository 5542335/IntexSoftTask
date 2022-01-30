import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import searchIcon from '../icons/search.svg';
import { StyledLoader } from '../dumb/Loader';
import { useDebounce } from '../../hooks/useDebounce';

interface SearchBarProps {
  defaultInputValue: string;
  onChangeText: (text: string) => void;
}

const StyledSearchIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledInput = styled.input`
  font-size: 14px;
  line-height: 130%;
  font-weight: 500;
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
  background-color: #fff;
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
`;

export const SearchBar: FC<SearchBarProps> = ({ defaultInputValue, onChangeText }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [searchText, setSearchText] = useState('');
  const debouncedText = useDebounce(searchText, 1000);

  const handleInput = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchText(value);
  }, []);

  useEffect(() => {
    if (debouncedText.length >= 3) {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }
    onChangeText(debouncedText);
  }, [debouncedText]);

  return (
    <StyledSearchBarWrapper>
      <StyledSearchBar>
        <StyledLabel htmlFor="search-input">
          <StyledSearchIcon />
        </StyledLabel>
        <StyledInput id="search-input" onChange={handleInput} placeholder={defaultInputValue} />
        {showLoader && <StyledLoader />}
      </StyledSearchBar>
    </StyledSearchBarWrapper>
  );
};
