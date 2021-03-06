import React from "react";
import styles from "./searchBar.module.css";

const searchBar = ({ setSearchText, searchText }) => {
	return (
		<div>
			<div className={styles.headerFlex}>
				<hgroup className={styles.titleWrapper}>
					<h1 className={styles.title}>Netclicks</h1>
					<h2 className={styles.subtitle}>all about series</h2>
				</hgroup>

				<section className={styles.search}>
					<form
						onSubmit={(e) => e.preventDefault()}
						className={styles.search__form}
					>
						<h2 className={styles.search__formHead}>Search</h2>

						<input
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
							type="text"
							className={styles.search__formInput}
							name="searchText"
							placeholder="Enter a name..."
							value={searchText}
						/>
						<label
							className={styles.search__formBlock}
							htmlFor="searchText"
						></label>
					</form>
				</section>
			</div>
		</div>
	);
};

export default searchBar;
