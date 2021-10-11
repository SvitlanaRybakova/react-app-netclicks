import React from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";

import styles from "../../../components/movie_card/MovieCard.module.css";
import Image from "../../../components/image/Image";
import CustomErrorMessage from "../../../components/error_message/CustomErrorMessage";
import Spinner from "../../../components/spinner/Spinner";
import { getMovieById } from "../../../services/ThemoviedbAPI";

const HistoryCard = ({ id }) => {
	const { data, error, isError, isLoading } = useQuery(
		["history-card", id],
		() => getMovieById(id),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		}
	);
  let history = useHistory();
  
	return (
		<>
			{isError && <CustomErrorMessage error={error} />}
			{isLoading && <Spinner />}
			{data && (
				<div
					className={styles.tvShows__item}
					onClick={() => history.push(`/movies/${id}`)}
				>
					<div className={styles.tvCard}>
						<span className={styles.tvCard__vote}>
							{data.vote_average}
						</span>
						<Image
							poster={data.poster_path}
							title={data.title}
						/>
						<h4 className={styles.tvCard__head}>{data.title}</h4>
					</div>
				</div>
			)}
		</>
	);
};

export default HistoryCard;
