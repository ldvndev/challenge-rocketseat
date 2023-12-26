import styled from 'styled-components'

export const TaskListContainer = styled.div`
  margin-top: 4rem;
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;
  font-weight: 700;

  p:first-child {
    color: ${(props) => props.theme.blue};

    span {
      margin-left: 0.5rem;
      color: ${(props) => props.theme['gray-200']};
    }
  }

  p:last-child {
    color: ${(props) => props.theme.purple};

    span {
      margin-left: 0.5rem;
      color: ${(props) => props.theme['gray-200']};
    }
  }
`

export const ListContainer = styled.div`
  margin-top: 1.5rem;
`

export const ListInNoDefinedOrder = styled.ul`
  display: grid;
  gap: 0.75rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 140%;

    padding: 1rem;
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 8px;
    background: ${(props) => props.theme['gray-500']};
  }
`

export const TaskComplete = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.theme['gray-300']};
`

export const TaskIncomplete = styled.span`
  color: ${(props) => props.theme['gray-100']};
`

export const DeleteButton = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.red};
  }
`

const ToggleButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ToggleButtonIncomplete = styled(ToggleButtonBase)`
  border: 1px solid ${(props) => props.theme.blue};
  background: none;
`

export const ToggleButtonComplete = styled(ToggleButtonBase)`
  border: 1px solid ${(props) => props.theme.purple};
  background: ${(props) => props.theme.purple};
`
