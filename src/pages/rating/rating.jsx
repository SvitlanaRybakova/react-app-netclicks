import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import PageLayout from "../../components/layout/PageLayout";

const rating = () => {
	const { type } = useParams();
	return (
		<>
			<Helmet>
				<title>Netclicks | {type}</title>
			</Helmet>
			<PageLayout>
				<h1> Rating Page {type}</h1>
			</PageLayout>
		</>
	);
};

export default rating;
