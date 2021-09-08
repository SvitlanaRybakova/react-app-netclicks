import React from 'react'
import StaffCard from "../cast_crew_card/StaffCard";


const Cast = ({castData}) => {
  return (
		<>
			{castData.map((cast, i) => (
				<StaffCard
					key={cast.id}
					imagePath={cast.profile_path}
					name={cast.original_name}
					staff_id={cast.id}
				/>
			))}
		</>
  );
}

export default Cast
