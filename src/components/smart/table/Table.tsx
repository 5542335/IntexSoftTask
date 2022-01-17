import styled from 'styled-components';
import {
  StyledTableHeaderWrapper,
  StyledTitleImage,
  StyledTitleItemWrapper,
  TableHeader,
  TableHeaderProps,
} from './TableHeader';
import { TableBody, TableBodyProps } from '../../dumb/TableBody';
import {
  StyledBodyText,
  StyledBuildingIcon,
  StyledChip,
  StyledDepartmentWrapper,
  StyledLogo,
  StyledLogoWrapper,
  StyledNameWrapper,
  StyledPositionWrapper,
  StyledTrashIcon,
  StyledWorkplaceWrapper,
} from './hooks/useEmployeeColumns';
import { StyledTableItem, StyledTableRow } from './TableRow';

interface TableProps<T> extends TableBodyProps<T>, TableHeaderProps {}

export const StyledTable = styled.div`
  flex-direction: column;
  @media (max-width: 360px) {
    ${StyledChip} {
      margin-top: 10px;
    }
  }

  @media (max-width: 480px) {
    ${StyledTableHeaderWrapper} {
      display: none;
    }
    ${StyledTableRow} {
      display: grid;
      grid-template-rows: 22px 22px 1fr;
      grid-template-columns: 44px 2fr 1fr;
      padding: 16px;
      margin: 20px 16px;
      background: #ffffff;
      border: 1px solid #d0e2f6;
      box-sizing: border-box;
      border-radius: 8px;
      ${StyledTableItem} {
        //StyledLogoWrapper
        :nth-child(1) {
          grid-row: 1 / 3;
          grid-column: 1;
        }
        //StyledNameWrapper
        :nth-child(2) {
          grid-row: 1;
          grid-column: 2;
        }
        //StyledPositionWrapper
        :nth-child(3) {
          grid-row: 2;
          grid-column: 2;
        }
        //StyledDepartmentWrapper
        :nth-child(4) {
          grid-row: 1;
          grid-column: 3;
          justify-self: flex-end;
        }
        //StyledWorkplaceWrapper
        :nth-child(5) {
          grid-row: 3;
          grid-column: 1 / 4;
          border-top: 1px solid #d0e2f6;
          margin-top: 10px;
        }
      }
    }
    ${StyledWorkplaceWrapper} {
      ${StyledBodyText} {
        font-size: 12px;
      }
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    ${StyledChip} {
      margin-top: 10px;
      width: 100%;
      padding: 12px 0 12px;
    }
    ${StyledTrashIcon} {
      margin: 0 20px 0 auto;
    }
    ${StyledBuildingIcon} {
      margin: 0 16px 0 20px;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    margin-top: 24px;
    ${StyledTitleItemWrapper} {
      margin-bottom: 12px;
    }

    ${StyledTableHeaderWrapper} {
      ${StyledTableItem} {
        :nth-child(2) {
          opacity: 0;
          width: 0;
        }
      }
    }
    ${StyledLogoWrapper} {
      position: absolute;
      left: 5px;
      top: 5px;
    }
    ${StyledNameWrapper} {
      align-items: flex-start;
      margin-top: 40px;
      max-width: 80px;
    }
    ${StyledPositionWrapper} {
      ${StyledBodyText} {
        font-size: 14px;
        line-height: 17px;
      }
    }
    ${StyledDepartmentWrapper} {
      min-width: 90px;
    }
    ${StyledTableRow} {
      :not(:first-child) {
        min-height: 80px;
      }
    }
    ${StyledChip} {
      margin: 3px 0;
      padding: 8px 16px 8px 16px;
      :not(:last-child) {
        margin-right: 8px;
      }
    }
    ${StyledTrashIcon} {
      margin-left: 10px;
    }
  }
  @media (min-width: 768px) {
    margin-top: 24px;
    ${StyledTitleItemWrapper} {
      margin-bottom: 12px;
    }
    ${StyledTableHeaderWrapper} {
      ${StyledTableItem} {
        :nth-child(2) {
          opacity: 0;
          width: 0;
        }
      }
    }
    ${StyledNameWrapper} {
      margin-left: 12px;
      max-width: 120px;
    }
    ${StyledPositionWrapper} {
      ${StyledBodyText} {
        font-size: 14px;
        line-height: 17px;
      }
    }
    ${StyledLogo} {
      margin: 12px 0 12px;
    }
    ${StyledChip} {
      margin: 3px 0;
      padding: 8px 12px;
      :not(:last-child) {
        margin-right: 8px;
      }
    }
    ${StyledTrashIcon} {
      margin-left: 10px;
    }
    ${StyledTitleImage} {
      margin-left: 10px;
    }
  }
  @media (min-width: 480px) and (max-width: 1110px) {
    ${StyledTableRow} {
      padding: 0 5px;
    }
  }
`;

export const Table = <T,>({ data, columns, columnTitles }: TableProps<T>) => {
  return (
    <StyledTable>
      <TableHeader columnTitles={columnTitles} />
      <TableBody data={data} columns={columns} />
    </StyledTable>
  );
};
