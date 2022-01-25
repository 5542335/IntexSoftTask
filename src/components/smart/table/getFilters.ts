import { TableDataProps } from './TableRow';

export const getWorkplaceFilter =
  (currentWorkplaceStr: string) =>
  ({ workplace }: TableDataProps) => {
    return workplace.includes(currentWorkplaceStr);
  };

export const getDepartmentFilter =
  (currentDepartment: string) =>
  ({ department }: TableDataProps) => {
    return currentDepartment === department;
  };

export const getSearchTextFilter =
  (text: string) =>
  ({ name }: TableDataProps) => {
    return name.toLowerCase().includes(text.toLowerCase());
  };
