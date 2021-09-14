import { useState } from "react";

function useLocalStorage(key, initialValue) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value) => {
		
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;

			// set first item to array
			if (storedValue.length === 0) {
				setStoredValue([valueToStore]);
			}

			// adding elements to array up to 10 item
			if (storedValue.length > 0 && storedValue.length < 10) {
				// updates state with previous data
				const updateState = [...storedValue, valueToStore];
				// Save state
				setStoredValue(updateState);
			}

			// adding the last url to begining, delete last one from ending
			if (storedValue.length >= 10) {
			
				let items = [...storedValue];
				let item = { ...items[0] };
				
				items[0] = valueToStore;
				setStoredValue(items)
		
			}

			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(storedValue));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	};
	return [storedValue, setValue];
}
export default useLocalStorage;
