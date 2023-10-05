import styled from 'styled-components'

type CardType = {
  liked: boolean
}

export const Card = styled.article<CardType>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: clamp(360px, 70%, 900px);

  padding: 1rem;

  h3 {
    text-align: justify;
  }

  .date-wrapper {
    display: flex;
    justify-content: space-between;

    svg {
      path {
        fill:  ${({ liked })=> !liked ? '#574AE8' : '#F00'};
        }
      }
  }
`