import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import StaffCard from "../cast_crew_card/StaffCard";
import useLazyLoader from "../../../../hooks/useLazyLoad";

const Cast = ({ castData }) => {
	const { limit, ammountOfClick, onLoadMore } = useLazyLoader();

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
			<button
				className={ammountOfClick === 0 ? "delete" : ""}
				onClick={onLoadMore}
			>
				load more
			</button>
		</>
	);
};

export default Cast;
