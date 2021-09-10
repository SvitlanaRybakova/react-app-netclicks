import React from "react";
import { Helmet } from "react-helmet";

const Titel = ({ title="" }) => {
	return (
		<Helmet>
			<title>Netclicks | {title}</title>
		</Helmet>
	);
};

export default Titel;
