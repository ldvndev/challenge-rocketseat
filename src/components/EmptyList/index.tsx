import { EmptyListContainer } from './styles'
import { ClipboardText } from 'phosphor-react'

export function EmptyList() {
  return (
    <EmptyListContainer>
      <ClipboardText size={56} color="#333333" />
      <div>
        <span>Você ainda não tem tarefas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </EmptyListContainer>
  )
}
