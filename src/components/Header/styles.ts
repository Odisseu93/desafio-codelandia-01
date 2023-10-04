import styled from 'styled-components'

import { Theme } from '../../styles/Theme'

export const Header = styled.header`
  background: ${Theme.background.linear['puple-blue']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: clamp(200px, 19vh, 250px);

  padding: 1rem;

  nav {
    width: clamp(320px, 90%, 900px);

    ul {
      display: flex;
      justify-content: space-between;
  
     list-style: none;

     a {
        color: ${Theme.colors.dark['40']};
        
        ${Theme.typography['nav-link']}
     }
    }
  }

  .input-wrapper {
    width: clamp(320px, 90%, 900px);
    
    input {
      color: ${Theme.colors.dark['40']};
      background: rgba(255, 255, 255, 0.20);

      width: 100%;
  
      padding: .8rem;
      padding-left: 4rem;
      border: none;
      border-radius: 5px;
  
      &::placeholder {
        color: ${Theme.colors.dark['40']};
        opacity: 50%;
      }
      
    }
    
    &::before {
      position: relative; 
      top: 2.5rem;
      left: 1rem;
      content: url('/assets/img/search.svg');
    }
  }
`