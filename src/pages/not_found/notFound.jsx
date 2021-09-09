import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import styles from "./notFound.module.css";
import PageLayout from "../../components/layout/PageLayout";
import notFoundImage from "../../assets/images/notFound.png";

const notFound = () => {
	return (
		<>
			<Helmet>
				<title>Netclicks | Not Found</title>
			</Helmet>
			<PageLayout>
				<div className={styles.wrapper}>
					<img src={notFoundImage} alt="page not found" />
				</div>

				<Link to={"/"} className={styles.button}>
					To Home Page
				</Link>
			</PageLayout>
		</>
	);
};

export default notFound;
