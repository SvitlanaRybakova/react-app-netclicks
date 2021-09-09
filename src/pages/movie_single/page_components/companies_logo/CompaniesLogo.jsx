import React from 'react';
import { v4 as uuidv4 } from "uuid";

import styles from './CompaniesLogo.module.css'
import {IMG_URL_500} from '../../../../constants/constants'

const CompaniesLogo = ({ companies }) => {

	return (
		<div className={styles.companiesLogo}>
			{companies.map((company) => {
				return (
					<div className={styles.imgWrapper} key={uuidv4()}>
						{company.logo_path ? (
							<img
								src={`${IMG_URL_500}${company.logo_path}`}
								alt={company.name}
								style={{
									width: "100%",
								}}
							/>
						) : (
							<p className={styles.companyName}>{company.name}</p>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default CompaniesLogo
