import React from "react";
import { v4 as uuidv4 } from "uuid";
import CastCard from "./CastCard";
import NoData from "../../../components/no_matches/NoMatches";

const CrewWrapper = ({ crewData }) => {
	return (
		<>
			{crewData.length > 0 ? (
				crewData.map((person) => (
					<CastCard
						key={uuidv4()}
						id={person.id}
						posterPath={person.poster_path}
						title={person.title}
						character={person.character}
						job={person.job}
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

export default CrewWrapper;
