import { readTodo } from '../api';

export const searchTodo = ({ value, setTodos }) => {
	const getTodos = readTodo();
	getTodos()
		.then((data) => {
			const filteredTodos = data.filter(({ title }) => {
				if (title) {
					return title.toLowerCase().includes(value.trim().toLowerCase());
				}
			});
			setTodos(filteredTodos);
		})
		.catch((e) => console.log(e));
};
