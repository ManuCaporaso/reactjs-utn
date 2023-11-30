import React, { useState } from 'react';
import Styles from './TaskForm.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = ({ onAdd }) => {
    // Estados locales para gestionar la entrada del usuario
    const [taskName, setTaskName] = useState('');
    const [difficulty, setDifficulty] = useState('Fácil');
    const [priority, setPriority] = useState('Baja');

    // Estas son las opciones predefinidas para niveles de dificultad y prioridad
    const difficulties = ['Fácil', 'Medio', 'Difícil'];
    const priorities = ['Baja', 'Media', 'Alta'];

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
          case 'Fácil':
            return 'yellow';
          case 'Medio':
            return 'orange';
          case 'Difícil':
            return 'red';
          default:
            return 'white'; // Puedes cambiar el color por defecto según tus preferencias
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
            return 'white'; // Puedes cambiar el color por defecto según tus preferencias
        }
      };

    // Aca Manejamos la presentación de nuevas tareas
    const handleSubmit = (e) => {
        e.preventDefault();

        // Esto verifica que el campo de tarea no esté vacío
        if (taskName.trim() === '') {
          toast.warn('Por favor, ingresa el nombre de la tarea.');
            return;
        }

        // Crear un nuevo objeto de tarea con dificultad y prioridad
        const newTask = {
            id: Date.now(), // Utilizo Data.now como identificador único porque lo use en un ejercicio antes y me funciono bien porque
            // cada llamada a Date.now() en un momento específico dará como resultado un timestamp único, igual lo podemos cambiar por otra forma de asignar un id unico
            name: taskName,
            completed: false,
            difficulty,
            priority,
        };

        onAdd(newTask);

        // Esto es para Limpiar el campo de entrada después de agregar la tarea
        setTaskName('');
        setDifficulty('Fácil');
        setPriority('Baja');
    };

    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            <input className={Styles.input}
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Nueva tarea"
            />
            {/* Estos son los 3 Botones para niveles de dificultad */}
            <h4>Dificultad</h4>
            <select className={Styles.select} onChange={(e) => setDifficulty(e.target.value)} value={difficulty} style={{ backgroundColor: getDifficultyColor(difficulty) }}>
                {difficulties.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {/* Estos son los 3 Botones para niveles de prioridad */}
            <h4>Prioridad</h4>
            <select className={Styles.select} onChange={(e) => setPriority(e.target.value)} value={priority} style={{ backgroundColor: getPriorityColor(priority) }}>
                {priorities.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button type="submit" className={Styles.boton}>Agregar Tarea</button>
        </form>
    );
};

// Componente de Formulario (TaskForm):
// Este componente contendrá un formulario para agregar nuevas tareas.
// Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a
// la lista principal.

export default TaskForm;

