import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/title/Title";
import PageLayout from "../../components/layout/PageLayout";

const genres = () => {
	const { type } = useParams();
	return (
		<>
			<Title title={type} />

			<PageLayout>
				<h1>Genres page {type}</h1>
			</PageLayout>
		</>
	);
};

export default genres;
