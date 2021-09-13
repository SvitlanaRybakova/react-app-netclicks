import React from "react";
import { v4 as uuidv4 } from "uuid";

import CastCard from "./CastCard";
import NoData from "../../../components/no_matches/NoMatches";
import ButtonLoadMore from "../../../components/button_load_more/ButtonLoadMore";
import useLazyLoader from "../../../hooks/useLazyLoader";

const CastWrapper = ({ castData }) => {
	const { limit, ammountOfClick, onLoadMore } = useLazyLoader(
		castData.length
	);

	return (
		<>
			{castData.length > 0 ? (
				castData
					.slice(0, limit)
					.map((person) => (
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
			<ButtonLoadMore
				ammountOfClick={ammountOfClick}
				onLoadMore={onLoadMore}
			/>
		</>
	);
};

export default CastWrapper;
