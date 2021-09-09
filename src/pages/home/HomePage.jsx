import React, { useState } from "react";
import { useQuery } from "react-query";
import {Alert} from 'react-bootstrap';

import PageLayout from "../../components/layout/PageLayout";
import CustomErrorMessage from "../../components/error_message/CustomErrorMessage";
import SearchBar from "../../components/search_bar/searchBar";
import { getPlayingMovies } from "../../services/ThemoviedbAPI";
import MovieCard from "../../components/movie_card/MovieCard";
import Pagination from '../../components/pagination/PaginationBasic'
import styles from './HomePage.module.css';


const HomePage = () => {
	const [page, setPage] = useState(1);
console.log("page",page);
	const {
		data,
		error,
		isError,
	} = useQuery(["home", page], () => getPlayingMovies(page), {
		staleTime: 1000 * 60 * 5, // 5 mins
		cacheTime: 1000 * 60 * 30, // 30 mins
		keepPreviousData: true, // keep previous data
	});

	
	return (
		<>
			{isError && <CustomErrorMessage  error={error}/>}
			{data?.results && (
				<PageLayout>
					<SearchBar />

					<section>
						<h3 className={styles.tvShows__head}>Playing now</h3>
						<ul className={styles.tvShows__list}>
							{data.results.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</ul>
					</section>
					<Pagination page={page} setPage={setPage} totalPages={data.total_pages}/>
				</PageLayout>
			)}
		</>
	);
};

export default HomePage;
