import { useCallback, useEffect, useState } from 'react';
import { TableDataProps } from '../components/smart/table/TableRow';

export const useFilters = (data: TableDataProps[]) => {
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(data);

  const updateFilter = useCallback(
    (key: string, callback: ((user: TableDataProps) => boolean) | null) => {
      setFilters({ ...filters, [key]: callback });
    },
    [filters],
  );

  useEffect(() => {
    let filteredEmployees: TableDataProps[] = [...data];
    Object.values(filters).forEach((filterCallback: any) => {
      if (filterCallback) {
        filteredEmployees = filteredEmployees.filter(filterCallback);
      }
    });

    setFilteredData(filteredEmployees);
  }, [data, filters, setFilteredData]);

  return { updateFilter, filteredData };
};
