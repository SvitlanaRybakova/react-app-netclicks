import React from "react";
import StaffCard from "../cast_crew_card/StaffCard";

const Crew = ({ crewData }) => {
	return (
		<>
			{crewData.map((crew) => (
				<StaffCard
					key={crew.id}
					imagePath={crew.profile_path}
          name={crew.original_name}
          staff_id={crew.id}
				/>
			))}
		</>
	);
};

export default Crew;
