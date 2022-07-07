import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
    color: #fff;
    background-color:#212225;
  }
`;

export default GlobalStyle;
