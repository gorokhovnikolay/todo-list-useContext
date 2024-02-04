import { AppContext } from './context';
import { TodoList, ControlPanel } from './components';
import styles from './app.module.css';
import { readTodo } from './api';
import { useEffect, useState } from 'react';

const testTodos = readTodo();

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refresh, setRefresh] = useState(true);

	useEffect(() => {
		setLoading(false);
		testTodos()
			.then((data) => setTodos(data))
			.catch((e) => console.log(e))
			.finally(() => setLoading(true));
	}, [refresh]);

	return (
		<AppContext.Provider value={{ todos, setTodos, setRefresh }}>
			<div className={styles.container}>
				<h1>Список дел:</h1>
				<ControlPanel />
				{loading ? <TodoList /> : <div>Загрузка...</div>}
			</div>
		</AppContext.Provider>
	);
};
