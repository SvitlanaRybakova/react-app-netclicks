import React from "react";
import CastCard from "./CastCard";

const CrewWrapper = ({ crewData }) => {
	return (
		<>
			{crewData.length > 0 ? (
				crewData.map((person) => (
					<CastCard
						key={person.id}
						id={person.id}
						posterPath={person.poster_path}
						title={person.title}
						character={person.character}
						job={person.job}
					/>
				))
			) : (
				<h4 style={{ color: "#A5A5A5" }}>
					No matches to show ¯\_(ツ)_/¯
				</h4>
			)}
		</>
	);
};

export default CrewWrapper;
