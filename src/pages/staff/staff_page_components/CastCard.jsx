import React from "react";
import { Link } from "react-router-dom";

import Image from "../../../components/image/Image";
import styles from "./CastCard.module.css";

const CastCard = ({ id, posterPath, title, character, department, job }) => {
	return (
		<Link to={`/movies/${id}`} className={styles.card}>
			<Image poster={posterPath} className={styles.cardImage}/>
			<div className={styles.cardWrapper}>
				<h3 className={styles.cardName}>{title}</h3>
				{character && (
					<h4>
						{" "}
						<strong>Character:</strong> {character}
					</h4>
				)}
				{department && (
					<h4>
						{" "}
						<strong> Department:</strong>
						{department}
					</h4>
				)}
				{job && (
					<h4>
						{" "}
						<strong>Job:</strong> {job}
					</h4>
				)}
			</div>
		</Link>
	);
};

export default CastCard;
