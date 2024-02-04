import { deleteTodo } from '../api';

export const removeTodo = (id, setRefresh) => {
	const removeTodo = deleteTodo(id);
	removeTodo()
		.then()
		.catch((e) => console.log(e))
		.finally(() => setRefresh((prev) => !prev));
};
