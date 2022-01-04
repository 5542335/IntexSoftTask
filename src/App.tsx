import styled, { createGlobalStyle } from "styled-components";
import { EmployeePage } from "./views/EmployeePage";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`

const AppWrapper = styled.div`
    margin: 111px 405px 23px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <EmployeePage />
      </AppWrapper>
    </>
  );
}

export default App;
