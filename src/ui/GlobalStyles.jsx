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

  /* border */
  --element-round: 0.375rem;

  /* theme */
  &,&.light-mode {
    --theme-bg: var(--white);
    --theme-element: var(--white);
    --theme-text: var(--light-text);
    --theme-icon-light: var(--white);
    --theme-icon-dark: var(--very-dark-blue);

    /* shadows */
  --header-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  --element-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  &, &.dark-mode {
    --theme-bg: var(--very-dark-blue);
    --theme-element: var(--dark-blue);
    --theme-text: var(--white);
    --theme-icon-light: var(--white);
    --theme-icon-dark: var(--white);

    /* shadows */
  --header-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.06) 0px 2px 4px -1px;
  --element-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(255, 255, 255, 0.25) 0px 0px 0px 1px;
  }
}

/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}
img,
video {
  max-width: 100%;
  height: auto;
}
#root, #__next {
  isolation: isolate;
}
/* Reset */

/* sr-only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
/* sr-only */

body {
  font-family: var(--nunito);
  background-color: var(--theme-bg);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
`;

export default GlobalStyles;
