import React, {useState} from 'react'
import styles from './TabContent.module.css'
import Cast from '../../pages/movie_single/page_components/cast/Cast';
import Crew from '../../pages/movie_single/page_components/crew/Crew';
import CastWrapper from '../../pages/staff/staff_page_components/CastWrapper';
const TabContent = ({data, moviePage}) => {
  console.log("movie page", moviePage);
  const [isCastOpen, setCast] = useState(true);
  return (
		<>
			<div className={styles.tabs}>
				<button
					className={
						!isCastOpen
							? `${styles.tab}`
							: `${styles.tab} ${styles.active}`
					}
					onClick={() => setCast(true)}
				>
					{moviePage ? "Cast" : "Takes Part As a Cast"}
				</button>
				<button
					className={
						isCastOpen
							? `${styles.tab}`
							: `${styles.tab} ${styles.active}`
					}
					onClick={() => setCast(false)}
				>
					{moviePage ? "Crew" : "Takes Part As a Crew"}
				</button>
			</div>

			{moviePage && (
				<div className={styles.tabsContent}>
					{isCastOpen ? (
						<Cast castData={data.credits.cast} />
					) : (
						<Crew crewData={data.credits.crew} />
					)}
				</div>
			)}

			{!moviePage && (
				<div className={styles.tabsContent}>
					{isCastOpen ? (
						<CastWrapper data={data.credits.cast} />
					) : (
						<CastWrapper data={data.credits.crew} />
					)}
				</div>
			)}
		</>
  );
}

export default TabContent
