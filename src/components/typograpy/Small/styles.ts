import { Theme } from '../../../styles/Theme'
import styled from 'styled-components'

export const Small = styled.small`
  color: ${Theme.colors.dark['20']};

  ${Theme.typography.sm}

  @media(min-width: 768px) {
    
  }
`