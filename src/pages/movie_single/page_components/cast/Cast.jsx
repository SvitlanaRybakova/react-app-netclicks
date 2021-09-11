import React from "react";
import { v4 as uuidv4 } from "uuid";

import StaffCard from "../cast_crew_card/StaffCard";
import useLazyLoader from "../../../../hooks/useLazyLoader";

const Cast = ({ castData }) => {
	const { limit, ammountOfClick, onLoadMore } = useLazyLoader(
		castData.length
	);

	return (
		<>
			{castData.slice(0, limit).map((cast) => (
				<StaffCard
					key={uuidv4()}
					imagePath={cast.profile_path}
					name={cast.original_name}
					staff_id={cast.id}
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

export default Cast;
