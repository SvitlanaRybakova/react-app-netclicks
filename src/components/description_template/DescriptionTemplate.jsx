import React from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./DescriptionTemplate.module.css";
import {showBudget} from "../../services/utils"

const DescriptionTemplate = ({
	title,
	items,
	budget,
	releaseDate,
	birthPlace,
}) => {
	

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
