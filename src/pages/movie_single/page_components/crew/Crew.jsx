import React from "react";
import { v4 as uuidv4 } from "uuid";

import StaffCard from "../cast_crew_card/StaffCard";
import useLazyLoader from "../../../../hooks/useLazyLoader";

const Crew = ({ crewData }) => {
	const { limit, ammountOfClick, onLoadMore } = useLazyLoader(
		crewData.length
	);
	return (
		<>
			{crewData.slice(0, limit).map((crew) => (
				<StaffCard
					key={uuidv4()}
					imagePath={crew.profile_path}
					name={crew.original_name}
					staff_id={crew.id}
				/>
			))}
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

export default Crew;
