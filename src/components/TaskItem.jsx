import React, { useState } from 'react';
import Styles from './TaskItem.module.css';

const TaskItem = ({ task, onComplete, onDelete }) => {
  // Estado local para gestionar la apariencia de la tarea
  const [isCompleted, setIsCompleted] = useState(false);

  // Con esto Manejamos la tarea como completada y actualizar el estado local
  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    // Llamamos a la función de completar desde el componente principal
    onComplete(task.id);
  };

  // Con esto Manejamos la eliminación de la tarea
  const handleDelete = () => {
    // Llamamos a la función de eliminar desde el componente principal
    onDelete(task.id);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil':
        return 'yellow';
      case 'Medio':
        return 'orange';
      case 'Difícil':
        return 'red';
      default:
        return 'black';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Baja':
        return 'yellow';
      case 'Media':
        return 'orange';
      case 'Alta':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    // Esto le agrega el estilo a la tarea completada
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none', textDecorationColor: isCompleted ? 'rgb(138, 152, 249)' : 'initial' }}>
      <div>
        <strong>{task.name}</strong>
      </div>
      <div>
        Dificultad: <span style={{ color: getDifficultyColor(task.difficulty) }}>{task.difficulty}</span> - Prioridad:{' '}
        <span style={{ color: getPriorityColor(task.priority) }}>{task.priority}</span>
      </div>
      {/* Botón para completar la tarea */}
      <button className={Styles.botoncompletar} onClick={handleComplete}>Completar</button>
      {/* Botón para eliminar la tarea */}
      <button className={Styles.botoneliminar} onClick={handleDelete}>Eliminar</button>

      <hr></hr>
    </li>
  );
};

// Componente de Tarea (TaskItem):
// Este componente deberá representar individualmente una tarea.
// Mostrará el nombre de la tarea y un botón para completarla.
// Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
// cuando esté completada).

export default TaskItem;
