import React from "react";
import { Helmet } from "react-helmet";

const Title = ({ title="" }) => {
	return (
		<Helmet>
			<title>Netclicks | {title}</title>
		</Helmet>
	);
};

export default Title;
