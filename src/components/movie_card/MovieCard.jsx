import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import Image from "../image/Image";

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
				<Image
					isShown={isShown}
					backdrop={movie.backdrop_path}
					poster={movie.poster_path}
					title={movie.title}
				/>
				<h4 className={styles.tvCard__head}>{movie.title}</h4>
			</Link>
		</li>
	);
};

export default MovieCard;
