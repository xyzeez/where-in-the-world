import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    /* colors */
  --dark-blue: hsl(209, 23%, 22%);  
  --very-dark-blue: hsl(207, 26%, 17%);  
  --light-text: hsl(200, 15%, 8%); 
  --dark-gray: hsl(0, 0%, 52%);  
  --very-light-gray: hsl(0, 0%, 98%);  
  --white: hsl(0, 0%, 100%); 

  /* fonts */
  --nunito: "Nunito Sans", sans-serif;
  --regular: 300;
  --semi-bold: 600;
  --bold: 800;

  /* shadows */
  --header-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

body {
    font-family: var(--nunito);
}
`;

export default GlobalStyles;
