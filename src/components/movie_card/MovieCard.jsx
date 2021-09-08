import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
	const IMG_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
	const [isShown, setIsShown] = useState(false);

	return (
		<li
			className={styles.tvShows__item}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<Link to={`movies/${movie.id}`} className={styles.tvCard}>
				<span className={styles.tvCard__vote}>
					{movie.vote_average}
				</span>
				<img
					className={styles.tvCard__img}
					src={
						isShown
							? `${IMG_URL}${movie.backdrop_path}`
							: `${IMG_URL}${movie.poster_path}`
					}
					alt={movie.title}
				/>
				<h4 className={styles.tvCard__head}>{movie.title}</h4>
			</Link>
		</li>
	);
};

export default MovieCard;
