// import styled from 'styled-components';
import { users } from '../data';
import { TableRow } from './TableRow';

export const TableBody = () => {
  console.log('hello');
  return (
    <>
      {users.map((user) => {
        return (
          <TableRow
            key={user.id}
            columns={[user.name, user.position, user.department, user.workplace]}
            columnsWidth={[236, 162, 136, 576]}
          />
        );
      })}
    </>
  );
};
