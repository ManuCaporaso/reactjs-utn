import React from 'react';
import TaskItem from './TaskItem';
import Styles from './TaskList.module.css';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <ul className={tasks.length > 0 ? Styles.TaskList : Styles.TaskListEmpty}>
      {/* Mapear sobre la lista de tareas y renderizar un componente TaskItem por cada tarea */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </ul>
  );
};

// Componente de Lista de Tareas (TaskList):
// Este componente deberá mostrar la lista de tareas.
// Recibirá como propiedades la lista de tareas y funciones para gestionar eventos
// relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.).
// Cada tarea debe representarse mediante un componente TaskItem.

export default TaskList;
