import styled from 'styled-components'

import { Theme } from '../../styles/Theme'

export const Footer = styled.footer`
 background: ${Theme.background.linear['puple-blue']};

 display : flex ;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 
 width: 100%;
 min-height: 10vh;
 
 padding: 0.5rem;
 
 @media(max-width: 768px) {
   gap: 1rem;
 }
 p {
    color: ${Theme.colors.dark['40']};
    display: flex;
    gap: .5rem;

    padding-left: 1rem;

    a {
      color: inherit;
        
      @media(min-width: 768px) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`