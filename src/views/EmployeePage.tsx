import styled from 'styled-components';
import { FC, useCallback, useMemo, useState } from 'react';

import { StyledTitle, Title } from '../components/dumb/Title';
import { Tabs, StyledTabs } from '../components/dumb/Tabs';
import { SearchBar, StyledSearchBar, StyledSearchBarWrapper } from '../components/smart/SearchBar';
import { Select, StyledSelectWrapper, StyledSelect, StyledOptionsWrapper } from '../components/dumb/Select';
import { workplace, departments, users } from '../data';
import { StyledTable, Table } from '../components/smart/table/Table';
import {
  getEmployeeTableBody,
  StyledBuildingIcon,
  StyledChip,
  StyledDepartmentWrapper,
  StyledLogo,
  StyledLogoWrapper,
  StyledNameWrapper,
  StyledTrashIcon,
  StyledWorkplaceWrapper,
  StyledText,
} from '../components/smart/table/employeeTableBody';
import { getEmployeeTableTitles } from '../components/smart/table/employeeTableTitles';
import { StyledTableItem, StyledTableRow, TableDataProps } from '../components/smart/table/TableRow';
import { StyledTableHeader } from '../components/smart/table/TableHeader';
import { useFilters } from './useFilters';

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
  ${StyledTable} {
    margin-top: 24px;
  }
  ${StyledLogo} {
    margin: 12px 0;
  }
  ${StyledNameWrapper} {
    margin-left: 12px;
  }
  ${StyledChip} {
    margin: 3px 0;
    :not(:last-child) {
      margin-right: 8px;
    }
  }
  ${StyledTrashIcon} {
    margin-left: 10px;
  }

  @media (max-width: 1110px) {
    ${StyledTabs} {
      padding: 0 5px;
    }
    ${StyledTitle} {
      margin-left: 5px;
    }
    ${StyledTableRow} {
      padding: 0 5px;
    }
  }

  @media (max-width: 768px) {
    ${StyledNameWrapper} {
      align-items: flex-start;
      margin-top: 40px;
      margin-left: 0;
    }
    ${StyledChip} {
      padding: 8px 16px 8px 16px;
    }
    ${StyledDepartmentWrapper} {
      min-width: 100px;
    }
    ${StyledTableRow} {
      :not(:first-child) {
        min-height: 80px;
      }
    }
    ${StyledLogo} {
      margin: 0;
      align-self: flex-start;
    }
    ${StyledLogoWrapper} {
      position: absolute;
      left: 5px;
      top: 5px;
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
    ${StyledTable} {
      margin-top: 0;
    }
    ${StyledChip} {
      margin: 8px 0 0;
      width: 100%;
      padding: 12px 0 12px;
      :not(:last-child) {
        margin-right: 0;
      }
      :first-child {
        margin-top: 12px;
      }
    }
    ${StyledTableRow} {
      display: grid;
      grid-template-rows: 22px 22px 1fr;
      grid-template-columns: 44px 2fr 1fr;
      padding: 16px;
      margin: 20px 16px;
      background-color: #fff;
      border: 1px solid #d0e2f6;
      box-sizing: border-box;
      border-radius: 8px;
      :not(:first-child) {
        min-height: 0;
      }
    }
    ${StyledTableItem} {
      :nth-child(1) {
        grid-row: 1 / 3;
        grid-column: 1;
      }
      :nth-child(2) {
        grid-row: 1;
        grid-column: 2;
      }
      :nth-child(3) {
        grid-row: 2;
        grid-column: 2;
        ${StyledText} {
          font-size: 12px;
          line-height: 14px;
        }
      }
      :nth-child(4) {
        grid-row: 1;
        grid-column: 3;
        justify-self: flex-end;
      }
      :nth-child(5) {
        grid-row: 3;
        grid-column: 1 / 4;
        border-top: 1px solid #d0e2f6;
        margin-top: 10px;
      }
    }
    ${StyledTableHeader} {
      display: none;
    }
    ${StyledNameWrapper} {
      margin: 0;
    }
    ${StyledLogoWrapper} {
      position: static;
    }
    ${StyledDepartmentWrapper} {
      min-width: 0;
    }
    ${StyledWorkplaceWrapper} {
      ${StyledText} {
        font-size: 12px;
      }
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    ${StyledTrashIcon} {
      margin: 0 20px 0 auto;
    }
    ${StyledBuildingIcon} {
      margin: 0 16px 0 20px;
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

const rowsPerPage = 10;

export const EmployeePage: FC = () => {
  const defaultWorkplace = 'All';
  const selectButtonText = window.innerWidth > 480 ? 'Choose department' : 'Department';
  const titleText = window.innerWidth > 480 ? 'List of employees' : 'Employees list';

  const [currentWorkplace, setCurrentWorkplace] = useState(defaultWorkplace);
  const [currentSelectDep, setCurrentSelectDep] = useState(selectButtonText);
  const employeeColumns = getEmployeeTableBody();
  const tableTitles = getEmployeeTableTitles();
  const [offset, setOffset] = useState<number>(0);
  const { filteredData, updateFilter, getWorkplaceFilter, getDepartmentFilter } = useFilters<TableDataProps>(users);

  const onChangeWorkplace = useCallback(
    (workplaceItem: string) => {
      setCurrentWorkplace(workplaceItem);
      setOffset(0);
      updateFilter('workplace', workplaceItem !== defaultWorkplace ? getWorkplaceFilter(workplaceItem) : null);
    },
    [getWorkplaceFilter, updateFilter],
  );

  const onChangeDepartment = useCallback(
    (department: string) => {
      setCurrentSelectDep(department);
      setOffset(0);
      updateFilter('department', department !== selectButtonText ? getDepartmentFilter(department) : null);
    },
    [getDepartmentFilter, selectButtonText, updateFilter],
  );

  const paginationProps = {
    offset,
    setOffset,
    rowsPerPage,
    totalRows: filteredData.length,
  };

  const paginatedData = useMemo(() => {
    return filteredData.slice(offset, rowsPerPage + offset);
  }, [filteredData, offset]);

  return (
    <StyledPageWrapper>
      <Title>{titleText}</Title>
      <Tabs tabs={workplace} activeTab={currentWorkplace} onChange={onChangeWorkplace} />
      <StyledSearchAndSelect>
        <SearchBar defaultInputValue="Search of employees" />
        <Select
          currentSelect={currentSelectDep}
          items={departments}
          onChange={onChangeDepartment}
          selectButtonText={selectButtonText}
        />
      </StyledSearchAndSelect>
      <Table
        data={paginatedData}
        columns={employeeColumns}
        columnTitles={tableTitles}
        paginationProps={paginationProps}
      />
    </StyledPageWrapper>
  );
};
