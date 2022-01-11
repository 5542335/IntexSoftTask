import styled from 'styled-components';

export const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  right: 10px;
  width: 20px;
  height: 20px;
  :after {
    content: ' ';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 6px solid;
    border-color: #d0e2f6 transparent;
    animation: loader 1.2s linear infinite;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
