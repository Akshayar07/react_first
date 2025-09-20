import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
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
        <div className={styles.container}>
            <div className={styles.row}>
                <input className={styles.textInput} value={newTask} type="text" placeholder="Enter todo" onChange={(e) => setNewTask(e.target.value)} />
                <button className={styles.addBtn} onClick={addTask} >Add</button>
            </div>
            <ul className={styles.todoList}>
                {tasks.map((item, index) => (
                    <li key={index} className={styles.row}>
                        <label className={styles.listItem}>
                            <input type="checkbox" value={item.text} checked={item.completed} onChange={() => markComplete(index)} />
                            <span style={{ textDecoration: item.completed ? 'line-through' : 'none', }}>  {item.text} </span>
                        </label>
                        <button
                            className={styles.deleteBtn}
                            onClick={() => deleteTask(index)}
                        >
                            <FaTrash size={20} color='white' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

