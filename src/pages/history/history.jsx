import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { Helmet } from "react-helmet";

const history = () => {
	return (
		<>
			<Helmet>
				<title>Netclicks | History</title>
			</Helmet>
			<PageLayout>
				<h1>History Page</h1>
			</PageLayout>
		</>
	);
};

export default history;
