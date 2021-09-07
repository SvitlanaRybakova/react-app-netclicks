import React from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const rating = () => {
	const { type } = useParams();
	return (
		<PageLayout>
			<h1> Rating Page {type}</h1>
		</PageLayout>
	);
};

export default rating;
