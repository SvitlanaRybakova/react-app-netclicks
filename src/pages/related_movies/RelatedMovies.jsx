import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import Title from '../../components/title/Title';
import PageLayout from '../../components/layout/PageLayout';
import BackButton from '../../components/back_button/BackButton';
import CustomErrorMessage from '../../components/error_message/CustomErrorMessage';
import Spinner from '../../components/spinner/Spinner';
import MovieCard from '../../components/movie_card/MovieCard';
import { getSimillarMovie } from "../../services/ThemoviedbAPI";

const RelatedMovies = () => {
  const { movie_id } = useParams();
  
	const { data, error, isError, isLoading } = useQuery(
		["relatedMovies", movie_id],
		() => getSimillarMovie(movie_id),
	);
  
	return (
		<>
			<Title title={movie_id} />
			{isError && <CustomErrorMessage error={error} />}
			{isLoading && <Spinner />}
			{data?.results && (
				<PageLayout>
					<BackButton />
					<h1 className="tvShows__head">Top 20 related movies</h1>
					<section>
						<ul className="tvShows__list">
							{data.results.map((movie) => (
								<MovieCard
									key={uuidv4()}
									id={movie.id}
									voteAverage={movie.vote_average}
									backdrop={movie.backdrop_path}
									poster={movie.poster_path}
									movie={movie}
									title={movie.title}
								/>
							))}
						</ul>
					</section>
				</PageLayout>
			)}
		</>
	);
};

export default RelatedMovies;
