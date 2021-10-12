import React, {useState} from 'react'
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Title from "../../components/title/Title";
import PageLayout from "../../components/layout/PageLayout";
import CustomErrorMessage from "../../components/error_message/CustomErrorMessage";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movie_card/MovieCard";
import Pagination from "../../components/pagination/PaginationBasic";
import { getTrending } from "../../services/ThemoviedbAPI";
import useQueryParamsUrl from "../../hooks/useQueryParamsUrl";

const Episodes = () => {
  const {currentPage, setCurrentPage} = useQueryParamsUrl();
  const { type } = useParams();

  const { data, error, isError, isLoading } = useQuery(
		["episodes", type, currentPage],
		() => getTrending(type, currentPage),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
		}
  );

  return (
		<>
			<Title title={type} />
			{isError && <CustomErrorMessage error={error} />}
			{isLoading && <Spinner />}
			{data?.results && (
				<PageLayout>
					<h1 className="tvShows__head">Movies of the {type}</h1>
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
}

export default Episodes
