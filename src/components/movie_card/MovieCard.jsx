import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./MovieCard.module.css";
import Image from "../image/Image";

const MovieCard = ({ id, voteAverage, backdrop, poster, title }) => {
	const [isShown, setIsShown] = useState(false);
	let history = useHistory();

	return (
		<li
			className={styles.tvShows__item}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
			onClick={() => history.push(`/movies/${id}`)}
		>
			<div className={styles.tvCard}>
				<span className={styles.tvCard__vote}>{voteAverage}</span>
				<Image
					isShown={isShown}
					backdrop={backdrop}
					poster={poster}
					title={title}
				/>
				<h4 className={styles.tvCard__head}>{title}</h4>
			</div>
		</li>
	);
};

export default MovieCard;
