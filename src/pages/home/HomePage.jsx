import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";

import PageLayout from "../../components/layout/PageLayout";
import CustomErrorMessage from "../../components/error_message/CustomErrorMessage";
import SearchBar from "../../components/search_bar/searchBar";
import { getMovie } from "../../services/ThemoviedbAPI";
import MovieCard from "../../components/movie_card/MovieCard";
import Pagination from "../../components/pagination/PaginationBasic";
import styles from "./HomePage.module.css";

const HomePage = () => {
	const [page, setPage] = useState(1);
	const [searchText, setSearchText] = useState("");
	const [query, setQuery] = useState(null);
	const { data, error, isError, isLoading } = useQuery(
		["home", page, query],
		() => getMovie(page, query),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		}
	);

	useEffect(() => {
		setTimeout(() => {
			setQuery(searchText);
		}, 1000);
	}, [searchText]);




	return (
		<>
			{isError && <CustomErrorMessage error={error} />}
			{isLoading && <p>LOading...</p>}
			{data?.results && (
				<PageLayout>
					<SearchBar setSearchText={setSearchText} />

					<section>
					
						<ul className={styles.tvShows__list}>
							{data.results.map((movie) => (
								<MovieCard key={uuidv4()} movie={movie} />
							))}
						</ul>
					</section>
					<Pagination
						page={page}
						setPage={setPage}
						totalPages={data.total_pages}
					/>
				</PageLayout>
			)}
		</>
	);
};

export default HomePage;
