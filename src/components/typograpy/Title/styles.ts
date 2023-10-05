import { Theme } from '../../../styles/Theme';
import styled from 'styled-components';

export const Title = styled.h3`
  color: ${Theme.colors.dark['10']};

  ${Theme.typography.body}

  @media(min-width: 768px) {
    
  ${Theme.typography.title}
  }
`