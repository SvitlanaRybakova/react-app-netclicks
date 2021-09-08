import React from 'react'
import styles from './DescriptionTemplate.module.css'

const DescriptionTemplate = ({title, items, budget, releaseDate}) => {

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

			{Array.isArray(items) &&
				items.map((item, i) => (
					<span key={i} className={styles.aboutTextRegular}>
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
		</p>
	);
}

export default DescriptionTemplate
