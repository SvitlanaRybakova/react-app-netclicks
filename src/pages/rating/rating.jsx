import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Title from "../../components/title/Title";
import PageLayout from "../../components/layout/PageLayout";
import CustomErrorMessage from "../../components/error_message/CustomErrorMessage";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movie_card/MovieCard";
import Pagination from "../../components/pagination/PaginationBasic";
import { getRatedMovies } from "../../services/ThemoviedbAPI";
import useQueryParamsUrl from "../../hooks/useQueryParamsUrl";

const rating = () => {
	const {currentPage, setCurrentPage} = useQueryParamsUrl();
	const { type } = useParams();
	const { data, error, isError, isLoading } = useQuery(
		["rating", type, currentPage],
		() => getRatedMovies(type, currentPage),
	);

	return (
		<>
			<Title title={type} />
			{isError && <CustomErrorMessage error={error} />}
			{isLoading && <Spinner />}
			{data?.results && (
				<PageLayout>
					<h1 className="tvShows__head">{type} movies</h1>
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
					<Pagination
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={data.total_pages}
					/>
				</PageLayout>
			)}
		</>
	);
};

export default rating;
