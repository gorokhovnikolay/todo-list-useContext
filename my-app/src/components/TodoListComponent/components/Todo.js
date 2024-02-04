import React, { useContext, useState } from 'react';
import { removeTodo, cangeChecked } from '../../../utils';
import { AppContext } from '../../../context';
import styles from './todo.module.css';

export const Todo = ({ id, title, completed }) => {
	const { setRefresh } = useContext(AppContext);
	const [checked, setChecked] = useState(completed);

	return (
		<div className={styles.todo_item}>
			<div className={styles.todo_item__left}>
				<input
					type="checkbox"
					defaultChecked={checked}
					onChange={(e) => {
						cangeChecked({ e, id, setRefresh, setChecked });
					}}
				/>
				<div key={id}>{title}</div>
			</div>
			<div className={styles.todo_item__right}>
				<button onClick={() => removeTodo(id, setRefresh)}>x</button>
			</div>
		</div>
	);
};
