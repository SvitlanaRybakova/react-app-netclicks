import React from "react";
import { v4 as uuidv4 } from "uuid";

import StaffCard from "../cast_crew_card/StaffCard";

const Crew = ({ crewData }) => {
	return (
		<>
			{crewData.map((crew) => (
				<StaffCard
					key={uuidv4()}
					imagePath={crew.profile_path}
					name={crew.original_name}
					staff_id={crew.id}
				/>
			))}
		</>
	);
};

export default Crew;
