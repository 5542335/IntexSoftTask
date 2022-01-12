import styled from 'styled-components';

import { FC, useState } from 'react';

import { StyledTitle, Title } from '../components/dumb/Title';
import { Tabs, StyledTabsContainer } from '../components/dumb/Tabs';
import { SearchBar, StyledSearchBarWrapper } from '../components/smart/SearchBar';
import { Select, StyledSelectWrapper, StyledSelect, StyledOptionsWrapper } from '../components/dumb/Select';
import { TableHeader } from '../components/smart/TableHeader';
import { TableBody } from '../components/dumb/TableBody';
import { workPlace, departments } from '../components/data';

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 111px auto 23px;
  max-width: 1110px;

  @media (max-width: 480px) {
    margin: 15px auto 5px;
  }
`;

const StyledTitleAndTabs = styled.header`
  display: flex;
  flex-direction: column;

  ${StyledTabsContainer} {
    margin-top: 24px;
    padding: 0 5px;
  }

  @media (max-width: 480px) {
    ${StyledTitle} {
      font-size: 18px;
      line-height: 140%;
      text-align: center;
    }
  }

  @media (min-width: 481px) and (max-width: 1110px) {
    ${StyledTitle} {
      margin-left: 5px;
    }
  }

  @media (min-width: 1110px) {
    ${StyledTabsContainer} {
      padding: 0;
    }
  }
`;

const StyledSearchAndSelect = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 76px;
  background-color: #f5f9fd;
  border-radius: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    background-color: transparent;
    align-items: flex-end;

    ${StyledSelectWrapper} {
      margin: 28px 16px 0 0;
    }
    ${StyledOptionsWrapper} {
      top: 20px;
    }
    ${StyledSelect} {
      align-self: flex-start;
    }
    ${StyledSearchBarWrapper} {
      padding: 24px 16px;
      border-bottom: 1px solid rgba(64, 72, 81, 0.1);
    }
  }

  @media (min-width: 481px) {
    margin-top: 16px;
    padding: 0 16px;

    ${StyledSelect} {
      min-width: 270px;
      height: 48px;
      padding: 15px 60px 15px 55px;
      background: #ffffff;
      border: 1px solid #d0e2f6;
      box-sizing: border-box;
      border-radius: 8px;
      margin-left: 16px;
      @media (min-width: 481px) and (max-width: 600px) {
        padding: 15px 40px 15px 35px;
        min-width: 230px;
      }
    }
    ${StyledOptionsWrapper} {
      top: 48px;
    }
  }
`;

const StyledTable = styled.div`
  width: 100%;
  flex-direction: column;
  margin-top: 24px;
`;

export const EmployeePage: FC = () => {
  const selectButtonText = window.innerWidth > 480 ? 'Choose department' : 'Department';

  const [currentWorkPlace, setCurrentWorkPlace] = useState(workPlace[0]);
  const [currentSelectDep, setCurrentSelectDep] = useState(selectButtonText);

  return (
    <StyledPageWrapper>
      <StyledTitleAndTabs>
        <Title />
        <Tabs tabs={workPlace} activeTab={currentWorkPlace} onChange={setCurrentWorkPlace} />
      </StyledTitleAndTabs>
      <StyledSearchAndSelect>
        <SearchBar />
        <Select
          currentSelect={currentSelectDep}
          items={departments}
          onChange={setCurrentSelectDep}
          selectButtonText={selectButtonText}
        />
      </StyledSearchAndSelect>
      <StyledTable>
        <TableHeader />
        <TableBody />
      </StyledTable>
    </StyledPageWrapper>
  );
};
