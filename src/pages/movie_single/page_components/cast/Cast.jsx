import React from "react";
import { v4 as uuidv4 } from "uuid";

import StaffCard from "../cast_crew_card/StaffCard";
import ButtonLoadMore from "../../../../components/button_load_more/ButtonLoadMore";
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
			<ButtonLoadMore
				ammountOfClick={ammountOfClick}
				onLoadMore={onLoadMore}
			/>
		</>
	);
};

export default Cast;
