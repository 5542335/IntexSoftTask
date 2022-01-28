import { useEffect, useState } from 'react';

export interface ISortedField {
  field: string;
  order: string;
}

export const useSort = <T>(data: T[] | any) => {
  const [sortedField, setSortedField] = useState<ISortedField>({
    field: '',
    order: '',
  });
  const [sortedData, setSortedData] = useState<T[]>();

  useEffect(() => {
    if (sortedField.field) {
      const field = sortedField.field.toLowerCase();

      const sortedResult = [...data].sort((a, b) => {
        if (sortedField.order === 'ASC') {
          return a[field] > b[field] ? 1 : -1;
        }
        return a[field] < b[field] ? 1 : -1;
      });

      setSortedData(sortedResult);
    } else {
      setSortedData(data);
    }
  }, [data, sortedField]);

  return { sortedData, sortedField, setSortedField, setSortedData };
};
