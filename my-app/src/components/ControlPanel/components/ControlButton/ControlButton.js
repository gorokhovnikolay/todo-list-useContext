import React from 'react';
import styles from './controlbutton.module.css';

export const Button = ({ fn, args, title, children }) => {
	return (
		<button className={styles.c_button} onClick={() => fn({ ...args })} title={title}>
			{children}
		</button>
	);
};
