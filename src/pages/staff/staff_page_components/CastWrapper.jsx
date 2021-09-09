import React from 'react'
import CastCard from './CastCard'

const CastWrapper = ({data}) => {
  console.log(data, data.length, );
  return (
		<>
			{data.length > 0 ? (
				data.map((person) => (
					<CastCard
						key={person.id}
						id={person.id}
            posterPath={person.poster_path}
            title={person.title}
            character={person.character}
            department={person.department}
            job={person.job}
					/>
				))
			) : (
				<h1>no movies to show</h1>
			)}
		</>
  );
  

}

export default CastWrapper
