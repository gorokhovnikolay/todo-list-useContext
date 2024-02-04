import React, { useContext, useState } from 'react';
import { AddTodo, SearchTodo, Button } from './components';
import styles from './controlpanel.module.css';
import { AppContext } from '../../context';
import { addTodo, sortTodoByAlphavite } from '../../utils';

export const ControlPanel = () => {
	const { todos, setTodos, setRefresh } = useContext(AppContext);
	const [titleTodo, setTitleTodo] = useState('');
	const [inputVisible, setInputVisible] = useState(true);
	return (
		<div className={styles.container_contol}>
			{!inputVisible && (
				<Button
					fn={() => setInputVisible((prev) => !prev)}
					title={'Свернуть поиск'}
				>
					↪
				</Button>
			)}
			<AddTodo
				titleTodo={titleTodo}
				setTitleTodo={setTitleTodo}
				inputVisible={inputVisible}
			/>
			<SearchTodo inputVisible={inputVisible} setTodos={setTodos} />
			{inputVisible && (
				<Button
					fn={() => setInputVisible((prev) => !prev)}
					title={'Найти задачу'}
				>
					🔎
				</Button>
			)}
			<Button
				fn={sortTodoByAlphavite}
				args={{ todos, setTodos }}
				title={'Сортировка от А до Я'}
			>
				📶
			</Button>

			<Button
				fn={addTodo}
				args={{ titleTodo, setTitleTodo, setRefresh }}
				title={'Добавить заметку'}
			>
				➕
			</Button>
		</div>
	);
};
