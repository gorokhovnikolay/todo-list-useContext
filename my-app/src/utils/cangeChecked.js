import { updateTodo } from '../api';

export const cangeChecked = ({ e, id, setRefresh, setChecked }) => {
	const { checked } = e.target;
	setChecked(checked);
	const updateNowTodo = updateTodo({ id, completed: checked });
	updateNowTodo()
		.then()
		.catch((e) => console.log(e))
		.finally(() => {
			setRefresh((prev) => !prev);
		});
};
