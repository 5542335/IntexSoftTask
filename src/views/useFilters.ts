import { useCallback, useEffect, useState } from 'react';
import { TableDataProps } from '../components/smart/table/TableRow';

export const useFilters = <T>(data: T[]) => {
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState<T[]>(data);

  const updateFilter = useCallback(
    (key: string, callback: ((user: TableDataProps) => boolean) | null) => {
      setFilters({ ...filters, [key]: callback });
    },
    [filters],
  );

  const getWorkplaceFilter =
    (currentWorkplace: string) =>
    ({ workplaces }: TableDataProps) => {
      return workplaces.includes(currentWorkplace);
    };

  const getDepartmentFilter =
    (currentDepartment: string) =>
    ({ department }: TableDataProps) => {
      return currentDepartment === department;
    };

  useEffect(() => {
    let filteredEmployees: T[] = [...data];
    Object.values(filters).forEach((filterCallback) => {
      if (filterCallback) {
        // @ts-ignore
        filteredEmployees = filteredEmployees.filter(filterCallback);
      }
    });

    setFilteredData(filteredEmployees);
  }, [data, filters, setFilteredData]);

  return { updateFilter, filteredData, getWorkplaceFilter, getDepartmentFilter };
};
