import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";

import Title from "../../components/title/Title";
import PageLayout from "../../components/layout/PageLayout";
import CustomErrorMessage from "../../components/error_message/CustomErrorMessage";
import Pagination from "../../components/pagination/PaginationBasic";
import SearchBar from "../../components/search_bar/searchBar";
import NoMatches from "../../components/no_matches/NoMatches";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movie_card/MovieCard";

import { getMovie } from "../../services/ThemoviedbAPI";
import styles from "./HomePage.module.css";

const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchText, setSearchText] = useState("");
	const [query, setQuery] = useState(null);
	const { data, error, isError, isLoading } = useQuery(
		["home", currentPage, query],
		() => getMovie(currentPage, query),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
		}
	);

	useEffect(() => {
		setTimeout(() => {
			setQuery(searchText);
			setCurrentPage(1);
		}, 1000);
	}, [searchText]);

	return (
		<>
			<Title title={"Home"} />
			{isError && <CustomErrorMessage error={error} />}
			{isLoading && <Spinner />}
			{data?.results && (
				<PageLayout>
					<SearchBar
						setSearchText={setSearchText}
						searchText={searchText}
					/>
					<section>
						{data?.total_results === 0 && <NoMatches />}

						<ul className="tvShows__list">
							{data.results.map((movie) => (
								<MovieCard key={uuidv4()} movie={movie} />
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

export default HomePage;
