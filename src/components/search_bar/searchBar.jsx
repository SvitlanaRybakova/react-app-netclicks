import React from "react";
import styles from "./searchBar.module.css";
// import { Container } from "react-bootstrap";

const searchBar = () => {
	return (
		<div>
			<div className={styles.headerFlex}>
				<hgroup className={styles.titleWrapper}>
					<h1 className={styles.title}>Netclicks</h1>
					<h2 className={styles.subtitle}>all about series</h2>
				</hgroup>

				<section className={styles.search}>
					<form className={styles.search__form}>
						<h2 className={styles.search__formHead}>Search</h2>

						<input
							type="text"
							className={styles.search__formInput}
							name="searchText"
							placeholder="Enter a name..."
						/>
						<label
							className={styles.search__formBlock}
							for="searchText"
						></label>
						<button type="submit">Search</button>
					</form>
				</section>
			</div>
		</div>
	);
};

export default searchBar;
