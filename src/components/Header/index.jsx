import todoLogo from '/todoLogo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './header.module.css'
import React from 'react'

export function Header({ onAddTask }) {
    const [title, setTitle] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(title);
        setTitle("")
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="" />
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder='add a new task' value={title} onChange={onChangeTitle} />
                <button>
                    create
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}