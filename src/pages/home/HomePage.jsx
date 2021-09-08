import React, {useState} from "react";
import PageLayout from "../../components/layout/PageLayout";
import SearchBar from '../../components/search_bar/searchBar';
import { useQuery } from "react-query";
import { getPlayingMovies } from "../../services/ThemoviedbAPI";

const HomePage = () => {
	const {
		data,
		error,
		isError,
		isFetching,
		isLoading,
		isPreviousData,
	} = useQuery("home", () => getPlayingMovies(), {
		staleTime: 1000 * 60 * 5, // 5 mins
		cacheTime: 1000 * 60 * 30, // 30 mins
		keepPreviousData: true, // keep previous data
	});
	return ( 
		<>
		<PageLayout>
			<SearchBar />
			<h1>This is Home Page</h1>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Repellendus eius nobis corrupti assumenda! Voluptates nobis
				sapiente reiciendis. Facere nostrum soluta dicta quis eaque,
				quae officia vitae pariatur doloremque. Dolorum, quidem?
			</div>
		</PageLayout>
		</>
	);
};

export default HomePage;
