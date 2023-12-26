import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: -4rem;

  button[type='submit'] {
    height: 3.375rem;
    width: 5.625rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: 0;
    border-radius: 8px;
    background: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme['gray-100']};
    cursor: pointer;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 140%;
    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme.blue};
    }
  }
`

export const TaskInput = styled.input`
  width: 100%;
  height: 3.375rem;
  padding: 1rem;

  color: ${(props) => props.theme['gray-300']};
  font-weight: 400;
  line-height: 140%;

  background: ${(props) => props.theme['gray-400']};
  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;
`
