import { useEffect, useState } from 'react';

export const useSort = <T>(data: T[]) => {
  const [sortedField, setSortedField] = useState({
    field: '',
    order: '',
  });
  const [sortedData, setSortedData] = useState<T[]>();

  useEffect(() => {
    if (sortedField.field) {
      const field = sortedField.field.toLowerCase();

      const sortedResult = [...data].sort((a, b) => {
        if (sortedField.order === 'ASC') {
          // @ts-ignore
          return a[field] > b[field] ? 1 : -1;
        }
        // @ts-ignore
        return a[field] < b[field] ? 1 : -1;
      });

      setSortedData(sortedResult);
    } else {
      setSortedData(data);
    }
  }, [data, sortedField.field, sortedField.order]);

  return { sortedData, sortedField, setSortedField };
};
