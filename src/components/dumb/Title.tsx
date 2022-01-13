import styled from 'styled-components';
import { FC } from 'react';

export const StyledTitle = styled.div`
  font-size: 36px;
  line-height: 43px;
  margin: 0;
`;

export const Title: FC = () => {
  const titleText = window.innerWidth > 480 ? 'List of employees' : 'Employees list';
  return <StyledTitle>{titleText}</StyledTitle>;
};
