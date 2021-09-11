import React from "react";
import { v4 as uuidv4 } from "uuid";
import CastCard from "./CastCard";
import NoData from "../../../components/no_matches/NoMatches";
import useLazyLoader from "../../../hooks/useLazyLoader";

const CrewWrapper = ({ crewData }) => {
	const { limit, ammountOfClick, onLoadMore } = useLazyLoader(
		crewData.length
	);

	return (
		<>
			{crewData.length > 0 ? (
				crewData
					.slice(0, limit)
					.map((person) => (
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
			<div className="button-wrapper">
				<button
					className={ammountOfClick === 0 ? "delete" : "loadMore_btn"}
					onClick={onLoadMore}
				>
					load more
				</button>
			</div>
		</>
	);
};

export default CrewWrapper;
