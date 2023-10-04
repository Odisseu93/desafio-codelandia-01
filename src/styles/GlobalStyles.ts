import { createGlobalStyle } from 'styled-components'
import { Theme } from './Theme'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  
  font-size: 16px;
  font-family: 'Lexend Deca', sans-serif;


  text-decoration: none;

  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  background-color: ${Theme.colors.dark['30']}
}

a {
  display: block;
  align-self: center;
}
`