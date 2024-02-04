import React, { useRef, useState } from 'react';

import { searchTodo } from '../../../../utils';
import { debounce } from './utils/debounce';
import styles from './searchTodo.module.css';

export const SearchTodo = ({ inputVisible, setTodos }) => {
	const [searchValue, setSearchValue] = useState('');
	const debounceSearch = useRef(debounce(searchTodo, 1000)).current;

	const onSearch = (e) => {
		const { value } = e.target;
		setSearchValue(value);

		debounceSearch({ value, setTodos });
	};

	return (
		<input
			className={styles.search_input}
			style={inputVisible ? { width: '0%' } : { width: '100%' }}
			type="text"
			value={searchValue}
			placeholder="Найти задачу"
			onChange={onSearch}
		/>
	);
};
