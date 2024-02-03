import { createGlobalStyle } from 'styled-components';
// import s from '../CERTIFICATE-1 copy.jpg';

const GlobalStyles = createGlobalStyle`
   body {
     background: url("images/CERTIFICATE-1.jpg");
     color: white;
     background-position: center center;
  background-size: cover ;
     transition: all 0.50s linear; 
  }
`;

export default GlobalStyles;
