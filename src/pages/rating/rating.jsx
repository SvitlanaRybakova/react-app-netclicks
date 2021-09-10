import React from "react";
import { useParams } from "react-router-dom";
import Title from '../../components/titel/Titel'

import PageLayout from "../../components/layout/PageLayout";

const rating = () => {
	const { type } = useParams();
	return (
		<>
		<Title title={type} />
			
			<PageLayout>
				<h1> Rating Page {type}</h1>
			</PageLayout>
		</>
	);
};

export default rating;
