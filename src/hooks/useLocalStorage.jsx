import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	// для избежания ошибок чтения в локал сторадж
	//  const [storedValue, setStoredValue] = useState(() => {
	// 		try {
	// 			const item = window.localStorage.getItem(key);
	// 			return item ? JSON.parse(item) : initialValue;
	// 		} catch (err) {
	// 			console.warn("Setting localStorage went wrong: ", err);
	// 			return initialValue;
	// 		}
	//  });
	const [storedValue, setStoredValue] = useState([]);

	// write in local Storage
	const setValue = (value) => {
		console.log(value);
		setStoredValue((prevState) => [...prevState, value]);
		console.log("stored value", storedValue);
		window.localStorage.setItem(
			(key = "favoritesDog"),
			JSON.stringify(storedValue)
		);
	};

	return [storedValue, setValue];
};

export default useLocalStorage;
