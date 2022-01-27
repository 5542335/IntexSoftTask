import { useEffect, useState } from 'react';

export interface ISortedField {
  field: string;
  order: string;
}

export const useSort = <T>(data: T[]) => {
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
  }, [data, sortedField]);

  return { sortedData, sortedField, setSortedField, setSortedData };
};
