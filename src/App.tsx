import { createGlobalStyle } from 'styled-components';
import { EmployeePage } from './views/EmployeePage';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Lato, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.02em;
  }
  body {
    margin: 0;
  }
  html {
    height: 100vh;
  }
`;

export const App = () => (
  <>
    <GlobalStyle />
    <EmployeePage />
  </>
);
