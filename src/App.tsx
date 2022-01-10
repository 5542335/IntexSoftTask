import { createGlobalStyle } from 'styled-components';
import { EmployeePage } from './views/EmployeePage';

const GlobalStyle = createGlobalStyle`
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
