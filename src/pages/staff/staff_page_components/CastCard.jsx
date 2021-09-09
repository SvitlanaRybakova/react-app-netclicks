import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../../assets/images/noImg.png";
import { IMG_URL_185 } from "../../../constants/constants";
import styles from "./CastCard.module.css";

const CastCard = ({ id, posterPath, title, character, department, job }) => {
	return (
		<Link to={`/movies/${id}`} className={styles.card}>
			{posterPath ? (
				<img
					src={`${IMG_URL_185}${posterPath}`}
					alt={title}
					className={styles.cardImage}
				/>
			) : (
				<img src={noImage} alt={title} className={styles.cardImage} />
			)}
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
