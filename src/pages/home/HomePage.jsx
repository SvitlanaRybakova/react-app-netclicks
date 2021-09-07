import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import SearchBar from '../../components/search_bar/searchBar';

const HomePage = () => {
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
