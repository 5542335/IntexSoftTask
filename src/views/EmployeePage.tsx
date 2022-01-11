import styled from 'styled-components';

import { FC, useState } from 'react';
import { StyledTitle, Title } from '../components/dumb/Title';
import { Tabs, StyledTabsContainer } from '../components/dumb/Tabs';
import { SearchBar, StyledSearchBarWrapper } from '../components/smart/SearchBar';
import { Select, StyledSelectWrapper, StyledSelect } from '../components/dumb/Select';

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

      :before {
        content: 'Employees list';
      }
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
  padding: 0 16px;
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

    ${StyledSearchBarWrapper} {
      margin: 24px 0;
    }

    ${StyledSelectWrapper} {
      margin: 28px 6px 0 0;
    }
  }

  @media (min-width: 481px) {
    margin-top: 16px;

    ${StyledSelect} {
      min-width: 270px;
      height: 48px;
      padding: 15px 60px 15px 55px;
      background: #ffffff;
      border: 1px solid #d0e2f6;
      box-sizing: border-box;
      border-radius: 8px;
      margin-left: 16px;
    }
  }
`;

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 111px auto 23px;
  max-width: 1110px;

  @media (max-width: 480px) {
    margin: 15px auto 5px;
  }
`;

const workPlace = ['All', 'Mostovaya', 'Bogutskogo', 'DNT', 'Gaspadarchaya', 'Bogdanovicha'];
const departments = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const EmployeePage: FC = () => {
  const [currentWorkPlace, setCurrentWorkPlace] = useState(workPlace[0]);
  const [currentSelectDep, setCurrentSelectDep] = useState('');

  return (
    <StyledPageWrapper>
      <StyledTitleAndTabs>
        <Title />
        <Tabs tabs={workPlace} activeTab={currentWorkPlace} onChange={setCurrentWorkPlace} />
      </StyledTitleAndTabs>
      <StyledSearchAndSelect>
        <SearchBar />
        <Select currentSelect={currentSelectDep} items={departments} onChange={setCurrentSelectDep} />
      </StyledSearchAndSelect>
    </StyledPageWrapper>
  );
};
