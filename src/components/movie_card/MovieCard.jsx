import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import {IMG_URL_185} from '../../constants/constants'

const MovieCard = ({ movie }) => {
	
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
							? `${IMG_URL_185}${movie.backdrop_path}`
							: `${IMG_URL_185}${movie.poster_path}`
					}
					alt={movie.title}
				/>
				<h4 className={styles.tvCard__head}>{movie.title}</h4>
			</Link>
		</li>
	);
};

export default MovieCard;
