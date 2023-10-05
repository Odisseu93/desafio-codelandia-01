import { Theme } from '../../../styles/Theme';
import styled from 'styled-components';

export const Paragraph = styled.h3`
  color: ${Theme.colors.dark['20']};

  ${Theme.typography.body}

  @media(min-width: 768px) {
    
  }
`