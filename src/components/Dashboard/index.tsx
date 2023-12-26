import { useState } from 'react'
import { TaskList } from '../TaskList'
import { TaskSubmitForm } from '../TaskSubmitForm'
import { Container } from './styles'

export interface TaskTypes {
  title: string
  id: string
  isComplete: boolean
}

export function Dashboard() {
  const [tasks, setTasks] = useState<TaskTypes[]>([])

  return (
    <Container>
      <TaskSubmitForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Container>
  )
}
