import styled from 'styled-components';
import { FC } from 'react';

export const StyledTitle = styled.div`
    font-family: Lato, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.02em;
    margin: 0;
    :before {
      content: 'List of employees';
    }
    
`;

export const Title: FC = () => <StyledTitle />;
