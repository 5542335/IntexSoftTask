import styled from 'styled-components';

import { FC, useState } from 'react';

import { StyledTitle, Title } from '../components/dumb/Title';
import { Tabs, StyledTabs } from '../components/dumb/Tabs';
import { SearchBar, StyledSearchBar, StyledSearchBarWrapper } from '../components/smart/SearchBar';
import { Select, StyledSelectWrapper, StyledSelect, StyledOptionsWrapper } from '../components/dumb/Select';
import { workPlace, departments, users } from '../data';
import { Table } from '../components/smart/table/Table';
import { getEmployeeTableBody } from '../components/smart/table/employeeTableBody';
import { getEmployeeTableTitles } from '../components/smart/table/employeeTableTitles';

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 111px auto 23px;
  max-width: 1110px;
  ${StyledTabs} {
    margin-top: 24px;
    margin-bottom: 0;
    border-bottom: 1px solid #deecf9;
  }
  ${StyledTitle} {
    font-size: 36px;
    line-height: 43px;
  }

  @media (max-width: 1110px) {
    ${StyledTabs} {
      padding: 0 5px;
    }
    ${StyledTitle} {
      margin-left: 5px;
    }
  }

  @media (max-width: 480px) {
    margin: 15px auto 5px;
    ${StyledTitle} {
      font-size: 18px;
      line-height: 140%;
      text-align: center;
      margin: 0;
    }
    ${StyledTabs} {
      box-shadow: 0 6px 12px 0 #0000001e;
    }
  }
`;

const StyledSearchAndSelect = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  justify-content: space-between;
  align-items: center;
  min-height: 76px;
  background-color: #f5f9fd;
  border-radius: 8px;
  margin-top: 16px;
  padding: 0 16px;
  ${StyledSelect} {
    min-width: 270px;
    height: 48px;
    padding: 15px 60px 15px 55px;
    background-color: #fff;
    border: 1px solid #d0e2f6;
    border-radius: 8px;
    margin-left: 16px;
  }
  ${StyledOptionsWrapper} {
    top: 48px;
  }

  @media (max-width: 600px) {
    ${StyledSelect} {
      padding: 15px 40px 15px 35px;
      min-width: 230px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    background-color: transparent;
    align-items: flex-end;
    margin-top: 0;
    padding: 0;
    ${StyledSelect} {
      height: auto;
      padding: 0;
      min-width: 0;
      border: none;
      margin: 0;
    }
    ${StyledSearchBar} {
      margin: 0 16px;
    }
    ${StyledSelectWrapper} {
      margin: 28px 16px 0 0;
    }
    ${StyledOptionsWrapper} {
      top: 20px;
    }
    ${StyledSearchBarWrapper} {
      padding: 24px 0;
      border-bottom: 1px solid #40485119;
    }
  }
`;

export const EmployeePage: FC = () => {
  const selectButtonText = window.innerWidth > 480 ? 'Choose department' : 'Department';
  const titleText = window.innerWidth > 480 ? 'List of employees' : 'Employees list';

  const [currentWorkPlace, setCurrentWorkPlace] = useState(workPlace[0]);
  const [currentSelectDep, setCurrentSelectDep] = useState(selectButtonText);
  const employeeColumns = getEmployeeTableBody();
  const tableTitles = getEmployeeTableTitles();
  const [employees, setEmployees] = useState(users);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginationProps = {
    employees,
    setEmployees,
    offset,
    setOffset,
    pageCount,
    setPageCount,
    rowsPerPage,
    setRowsPerPage,
  };

  return (
    <StyledPageWrapper>
      <Title>{titleText}</Title>
      <Tabs tabs={workPlace} activeTab={currentWorkPlace} onChange={setCurrentWorkPlace} />
      <StyledSearchAndSelect>
        <SearchBar defaultInputValue="Search of employees" />
        <Select
          currentSelect={currentSelectDep}
          items={departments}
          onChange={setCurrentSelectDep}
          selectButtonText={selectButtonText}
        />
      </StyledSearchAndSelect>
      <Table data={users} columns={employeeColumns} columnTitles={tableTitles} paginationProps={paginationProps} />
    </StyledPageWrapper>
  );
};
