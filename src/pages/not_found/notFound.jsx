import React from "react";
import { Link } from "react-router-dom";

import styles from "./notFound.module.css";
import PageLayout from "../../components/layout/PageLayout";
import notFoundImage from "../../assets/images/notFound.png";

const notFound = () => {
	return (
		<PageLayout>
			<div className={styles.wrapper}>
				<img src={notFoundImage} alt="page not found" />
			</div>

			<Link to={"/"} className={styles.button}>
				To Home Page
			</Link>
		</PageLayout>
	);
};

export default notFound;
