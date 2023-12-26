import { PlusCircle } from 'phosphor-react'
import { v4 as uuid } from 'uuid'

import { FormContainer, TaskInput } from './styles'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskTypes } from '../Dashboard'

interface TaskSubmitFormProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>
}

export function TaskSubmitForm({ setTasks }: TaskSubmitFormProps) {
  const [newTask, setNewTask] = useState('')

  function handleTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault()

    setTasks((state) => {
      return [...state, { id: uuid(), title: newTask, isComplete: false }]
    })
    setNewTask('')
  }

  return (
    <FormContainer action="" onSubmit={handleTaskSubmit}>
      <TaskInput
        list="task-suggestion"
        placeholder="Adicione uma nova task"
        value={newTask}
        onChange={handleTaskInputChange}
      />

      <datalist id="task-suggestion">
        <option value="Ir ao supermercado" />
        <option value="Comprar Pão" />
        <option value="Lava o carro" />
      </datalist>

      <button type="submit">
        Criar <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </button>
    </FormContainer>
  )
}
