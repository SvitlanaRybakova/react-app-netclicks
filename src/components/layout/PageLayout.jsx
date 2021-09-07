import React from "react";
import styles from "./PageLayout.module.css";

const PageLayout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className="container">{children}</div>
		</div>
	);
};

export default PageLayout;
