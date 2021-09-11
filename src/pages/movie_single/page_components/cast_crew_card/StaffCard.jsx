import React from "react";
import { Link } from "react-router-dom";
import styles from "./StaffCard.module.css";
import Image from "../../../../components/image/Image";

const StaffCard = ({ imagePath, name, staff_id }) => {
	return (
		<Link to={`/staff/${staff_id}`} className={styles.card}>
			<Image poster={imagePath} className={styles.cardImage} />
			<h3 className={styles.cardName}>{name}</h3>
		</Link>
	);
};

export default StaffCard;
