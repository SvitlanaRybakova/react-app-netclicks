import React from "react";
import { v4 as uuidv4 } from "uuid";

import CastCard from "./CastCard";
import NoData from "../../../components/no_matches/NoMatches";

const CastWrapper = ({ castData }) => {
	return (
		<>
			{castData.length > 0 ? (
				castData.map((person) => (
					<CastCard
						key={uuidv4()}
						id={person.id}
						posterPath={person.poster_path}
						title={person.title}
						character={person.character}
					/>
				))
			) : (
				<div style={{ maxWidth: "300px" }}>
					<NoData />
				</div>
			)}
		</>
	);
};

export default CastWrapper;
