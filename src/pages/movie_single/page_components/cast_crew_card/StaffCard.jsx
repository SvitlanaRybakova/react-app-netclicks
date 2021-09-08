import React from "react";
import {Link} from 'react-router-dom';
import styles from "./StaffCard.module.css";
import { IMG_URL_185 } from "../../../../constants/constants";
import noImg from "../../../../assets/images/noImg.png";

const StaffCard = ({ imagePath, name, staff_id }) => {
	return (
		<Link to={`/staff/${staff_id}`} className={styles.card}>
			{imagePath ? (
				<img
					src={`${IMG_URL_185}${imagePath}`}
					alt={name}
					className={styles.cardImage}
				/>
			) : (
				<img src={noImg} alt={name} className={styles.cardImage} />
			)}

			<h3 className={styles.cardName}>{name}</h3>
		</Link>
	);
};

export default StaffCard;
