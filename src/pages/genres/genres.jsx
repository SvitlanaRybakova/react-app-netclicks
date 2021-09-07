import React from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const genres = () => {
	const { type } = useParams();
	return (
		<PageLayout>
			<h1>Genres page {type}</h1>
		</PageLayout>
	);
};

export default genres;
