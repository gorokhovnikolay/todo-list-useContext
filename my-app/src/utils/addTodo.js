import { createTodo } from '../api';

export const addTodo = ({ titleTodo, setTitleTodo, setRefresh }) => {
	if (!(titleTodo === '')) {
		const createNewTodo = createTodo({ title: titleTodo, completed: false });
		createNewTodo()
			.then()
			.finally(() => {
				setRefresh((prev) => !prev);
				setTitleTodo('');
			});
	}
};
