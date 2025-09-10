import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    }

    const markComplete = (index) => {
        const updated = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
        setTasks(updated);
    }
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <>
            <input value={newTask} type="text" placeholder="Enter todo" onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask} >Add</button>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: 0 }}>
                {tasks.map((item, index) => (
                    <li key={index} className={styles.row}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                            <input type="checkbox" value={item.text} checked={item.completed} onChange={() => markComplete(index)} />
                            <span style={{ textDecoration: item.completed ? 'line-through' : 'none', }}>  {item.text} </span>
                        </label>
                        <button onClick={() =>
                            deleteTask(index)
                        }>
                            <FaTrash />
                        </button>
                        {/* </div> */}
                    </li>
                ))}
            </ul>
        </>
    )
}

