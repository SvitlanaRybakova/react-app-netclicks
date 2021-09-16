import React from "react";
import styles from "./PageLayout.module.css";

const PageLayout = ({ children }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className="container">{children}</div>
				<div className="footer">
					<p>
						{" "}
						This product uses the TMDB API but is not endorsed or
						certified by TMDB.
					</p>
				</div>
			</div>
		</>
	);
};

export default PageLayout;
