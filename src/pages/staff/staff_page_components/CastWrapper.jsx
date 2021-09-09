import React from "react";
import CastCard from "./CastCard";
import { v4 as uuidv4 } from "uuid";

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
				<h4 style={{ color: "#A5A5A5" }}>
					No matches to show ¯\_(ツ)_/¯
				</h4>
			)}
		</>
	);
};

export default CastWrapper;
