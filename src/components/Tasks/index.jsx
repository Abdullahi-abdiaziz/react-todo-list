import {Task}  from '../Task'
import styles from './tasks.module.css'

export function Tasks({ tasks, onComplete, onDelete }) {
    const taskQuantity = tasks.length - 1;
    const completeTasks = tasks.filter(task => task.isCompleted).length
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created tasks</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{completeTasks} of {taskQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map(task => {
                    if(task) {
                        return <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />;
                    }
                })}
            </div>
        </section>
    )
}