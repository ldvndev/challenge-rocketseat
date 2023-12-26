import { TaskTypes } from '../Dashboard'
import { Check, Trash } from 'phosphor-react'

import {
  DeleteButton,
  ListContainer,
  ListInNoDefinedOrder,
  StatusContainer,
  TaskComplete,
  TaskIncomplete,
  TaskListContainer,
  ToggleButtonComplete,
  ToggleButtonIncomplete,
} from './styles'
import { EmptyList } from '../EmptyList'

interface TaskListProps {
  tasks: TaskTypes[]
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
  function handleDeleteTask(id: string) {
    const deleteTask = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(deleteTask)
  }

  function handleToggleTask(id: string) {
    const updatedTask = tasks.map((task) => {
      return task.id === id ? { ...task, isComplete: !task.isComplete } : task
    })

    setTasks(updatedTask)
  }

  const countOfTasksCreated = tasks.length
  const countOfTasksCompleted = tasks.filter((task) => {
    return task.isComplete
  }).length

  return (
    <TaskListContainer>
      <StatusContainer>
        <p>
          Tarefas criadas <span>{countOfTasksCreated}</span>
        </p>
        <p>
          Concluídas
          {countOfTasksCreated > 0 ? (
            <span>
              {countOfTasksCompleted} de {countOfTasksCreated}
            </span>
          ) : (
            <span>{countOfTasksCreated}</span>
          )}
        </p>
      </StatusContainer>

      <ListContainer>
        {countOfTasksCreated > 0 ? (
          <ListInNoDefinedOrder>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.isComplete ? (
                  <ToggleButtonComplete
                    onClick={() => handleToggleTask(task.id)}
                  >
                    <Check size={16} color="#f2f2f2" weight="bold" />
                  </ToggleButtonComplete>
                ) : (
                  <ToggleButtonIncomplete
                    onClick={() => handleToggleTask(task.id)}
                  />
                )}

                {task.isComplete ? (
                  <TaskComplete>{task.title}</TaskComplete>
                ) : (
                  <TaskIncomplete>{task.title}</TaskIncomplete>
                )}

                <DeleteButton onClick={() => handleDeleteTask(task.id)}>
                  <Trash />
                </DeleteButton>
              </li>
            ))}
          </ListInNoDefinedOrder>
        ) : (
          <EmptyList />
        )}
      </ListContainer>
    </TaskListContainer>
  )
}
