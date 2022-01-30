import styled from 'styled-components';
import { FC, useCallback, useMemo, useState } from 'react';

import Title, { StyledTitle } from '../components/dumb/Title';
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
import { StyledTableItem, StyledTableRow, TableDataProps } from '../components/smart/table/TableRow';
import { StyledTableHeader } from '../components/smart/table/TableHeader';
import { useFilters } from '../hooks/useFilters';
import { useSort } from '../hooks/useSort';
import { StyledTableBodyWrapper } from '../components/smart/table/TableBody';
import { getDepartmentFilter, getSearchTextFilter, getWorkplaceFilter } from '../components/smart/table/getFilters';
import { Modal } from '../components/dumb/Modal';
import { ModalContent, ModalData } from '../components/dumb/ModalContent';
import { useWindowWidth } from '../hooks/useWindowWidth';

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 111px auto 23px;
  max-width: 1110px;
  ${StyledTabs} {
    margin-top: 32px;
    margin-bottom: 0;
  }
  ${StyledTitle} {
    font-size: 36px;
    line-height: 43px;
  }
  ${StyledTable} {
    margin-top: 24px;
  }
  ${StyledTableHeader} {
    ${StyledTableItem} {
      :nth-child(1) {
        flex-basis: 236px;
      }
      :nth-child(2) {
        flex-basis: 162px;
      }
      :nth-child(3) {
        flex-basis: 136px;
      }
      :nth-child(4) {
        flex-basis: 576px;
      }
    }
  }
  ${StyledTableBodyWrapper} {
    ${StyledTableItem} {
      :nth-child(1) {
        flex-basis: 32px;
      }
      :nth-child(2) {
        flex-basis: 204px;
      }
      :nth-child(3) {
        flex-basis: 162px;
      }
      :nth-child(4) {
        flex-basis: 136px;
      }
      :nth-child(5) {
        flex-basis: 576px;
      }
    }
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
  ${StyledBuildingIcon} {
    display: none;
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
    ${StyledTableBodyWrapper} {
      ${StyledTableItem} {
        :nth-child(1) {
          flex-basis: 0;
        }
        :nth-child(2) {
          flex-basis: 236px;
        }
      }
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
      margin-top: 24px;
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
        ${StyledText} {
          max-width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          :hover {
            text-overflow: clip;
          }
        }
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
      display: block;
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
const defaultWorkplace = 'All';

export const EmployeePage: FC = () => {
  const windowWidth = useWindowWidth();
  const titleText = windowWidth > 480 ? 'List of employees' : 'Employees list';
  const [currentWorkplace, setCurrentWorkplace] = useState(defaultWorkplace);
  const [currentSelectDep, setCurrentSelectDep] = useState('');
  const [offset, setOffset] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<ModalData>();
  const { filteredData, updateFilter } = useFilters(users);
  const { sortedData, sortedField, setSortedField, setSortedData } = useSort<TableDataProps>(filteredData);
  const employeeColumns = getEmployeeTableBody(setShowModal, setModalData);
  const tableTitles = ['Name', 'Position', 'Department', 'Workplace'];

  const onChangeWorkplace = useCallback(
    (workplaceItem: string) => {
      setCurrentWorkplace(workplaceItem);
      setOffset(0);
      updateFilter('workplace', workplaceItem !== defaultWorkplace ? getWorkplaceFilter(workplaceItem) : null);
    },
    [updateFilter],
  );

  const onChangeDepartment = useCallback(
    (department: string) => {
      setCurrentSelectDep(department);
      setOffset(0);
      updateFilter('department', department ? getDepartmentFilter(department) : null);
    },
    [updateFilter],
  );

  const onChangeSearchText = useCallback(
    (text: string) => {
      setOffset(0);
      updateFilter('searchText', text ? getSearchTextFilter(text) : null);
    },
    [updateFilter],
  );

  const handleSort = useCallback(
    (title: string) => () => {
      if (sortedField.order === 'DESC' && sortedField.field === title.toLowerCase()) {
        setSortedField({ field: '', order: '' });
      } else if (sortedField.field === title.toLowerCase()) {
        setSortedField({ field: title.toLowerCase(), order: `${sortedField.order === 'ASC' ? 'DESC' : 'ASC'}` });
      } else {
        setSortedField({ field: title.toLowerCase(), order: 'ASC' });
      }
    },
    [setSortedField, sortedField.field, sortedField.order],
  );

  const paginatedData = useMemo(() => {
    return sortedData?.slice(offset, rowsPerPage + offset);
  }, [sortedData, offset]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setModalData({ id: 0, logo: '', name: '', workplace: '' });
  }, []);

  const handleDeleteChip = useCallback(() => {
    const newSortedData = sortedData?.map((user) => {
      if (user.id === modalData?.id) {
        const index = user.workplace.indexOf(modalData?.workplace as string);
        user.workplace.splice(index, 1);
        return user;
      }
      return user;
    });
    setSortedData(newSortedData);
    setModalData({ id: 0, logo: '', name: '', workplace: '' });
    setShowModal(false);
  }, [modalData, setSortedData, sortedData]);

  return (
    <StyledPageWrapper>
      <Title>{titleText}</Title>
      <Tabs tabs={workplace} activeTab={currentWorkplace} onChange={onChangeWorkplace} />
      <StyledSearchAndSelect>
        <SearchBar defaultInputValue="Search of employees" onChangeText={onChangeSearchText} />
        <Select
          currentSelect={currentSelectDep}
          items={departments}
          onChange={onChangeDepartment}
          defaultWorkplace={defaultWorkplace}
        />
      </StyledSearchAndSelect>
      <Table
        data={paginatedData}
        columns={employeeColumns}
        columnTitles={tableTitles}
        paginationProps={{ offset, setOffset, rowsPerPage, totalRows: filteredData.length }}
        onSort={handleSort}
        sortedField={sortedField}
      />
      <Modal isActive={showModal} onClick={handleCloseModal}>
        <ModalContent
          modalText="Are you sure you want to remove booking of employee?"
          modalData={modalData}
          onClose={handleCloseModal}
          onDelete={handleDeleteChip}
        />
      </Modal>
    </StyledPageWrapper>
  );
};
