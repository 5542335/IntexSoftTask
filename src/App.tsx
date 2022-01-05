import { createGlobalStyle } from "styled-components";
import { EmployeePage } from "./views/EmployeePage";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
  html {
    height: 100vh;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <EmployeePage />
    </>
  );
}

export default App;
