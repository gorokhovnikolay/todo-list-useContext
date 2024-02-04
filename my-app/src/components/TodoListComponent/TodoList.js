import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { Todo } from './components/Todo';
import styles from './todoList.module.css';

export const TodoList = () => {
	const { todos } = useContext(AppContext);
	return (
		<div className={styles.todo_container}>
			{todos.map(({ id, title, completed }) => (
				<Todo key={id} id={id} title={title} completed={completed} />
			))}
		</div>
	);
};
