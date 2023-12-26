import styled from 'styled-components'

export const EmptyListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;

    span {
      color: ${(props) => props.theme['gray-300']};
      font-weight: 700;
      line-height: 140%;
    }
  }

  svg {
    margin-top: 4rem;
  }
`
