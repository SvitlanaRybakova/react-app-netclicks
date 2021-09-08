import React from 'react'
import styles from './Rating.module.css'

const Rating = ({voteAverage, voteCount}) => {
  return (
		<div className={styles.rating}>
			<div className={styles.ratingCounter}>
				{Math.floor((voteAverage * 100) / 10)}%
			</div>
			<div className={styles.ratingDescription}>
				<h3 className={styles.ratingTitle}>Viewer rating</h3>
				<span className={styles.ratingText}>
					Average rating:{" "}
					<strong clas={styles.ratingTextBold}>
						{voteAverage}/10
					</strong>
				</span>
				<span className={styles.ratingText}>
					Total votes:{" "}
					<strong clas={styles.ratingTextBold}>{voteCount}</strong>
				</span>
			</div>
		</div>
  );
}

export default Rating
