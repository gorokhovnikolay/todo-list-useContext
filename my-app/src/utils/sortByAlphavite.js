export const sortTodoByAlphavite = ({ setTodos, todos }) => {
	setTodos(
		[...todos].sort((a, b) => {
			if (a.title[0] > b.title[0]) {
				return 1;
			}
			if (a.title[0] < b.title[0]) {
				return -1;
			}
			return 0;
		}),
	);
};
