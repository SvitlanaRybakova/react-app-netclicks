import React from 'react';
import { v4 as uuidv4 } from "uuid";

import StaffCard from "../cast_crew_card/StaffCard";

const Cast = ({castData}) => {
  return (
		<>
			{castData.map(cast => (
				<StaffCard
					key={uuidv4()}
					imagePath={cast.profile_path}
					name={cast.original_name}
					staff_id={cast.id}
				/>
			))}
		</>
  );
}

export default Cast
