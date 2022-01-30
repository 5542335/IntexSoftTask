import { FC, memo } from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: string;
}

export const StyledTitle = styled.p``;

export const Title: FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default memo(Title);
