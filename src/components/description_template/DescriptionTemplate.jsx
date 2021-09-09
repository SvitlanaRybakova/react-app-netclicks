import React from "react";
import styles from "./DescriptionTemplate.module.css";
import { v4 as uuidv4 } from "uuid";

const DescriptionTemplate = ({
	title,
	items,
	budget,
	releaseDate,
	birthPlace,
}) => {
	// show budget in friendly set
	const showBudget = (budget) => {
		const price = String(budget);
		if (price.length % 3 == 0) {
			return price
				.split(/(\d{3})/)
				.join(" ")
				.trim();
		} else {
			//add a space as a separator in integers
			return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
		}
	};

	return (
		<p>
			<strong className={styles.aboutTextBold}>{title}</strong>

			{items &&
				items.map((item) => (
					<span key={uuidv4()} className={styles.aboutTextRegular}>
						&nbsp;&bull; {item.name}
					</span>
				))}

			{budget && (
				<span className={styles.aboutTextRegular}>
					{showBudget(budget)} $
				</span>
			)}
			{releaseDate && (
				<span className={styles.aboutTextRegular}>
					{new Date(releaseDate).toLocaleDateString("en-US", {
						day: "numeric",
						year: "numeric",
						month: "long",
					})}
				</span>
			)}
			{birthPlace && (
				<span className={styles.aboutTextRegular}>{birthPlace}</span>
			)}
		</p>
	);
};

export default DescriptionTemplate;
