import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Row, Col } from "react-bootstrap";

import Title from "../../components/title/Title";
import PageLayout from "../../components/layout/PageLayout";
import BackButton from "../../components/back_button/BackButton";
import DescriptionTemplate from "../../components/description_template/DescriptionTemplate";
import CustomErrorMessage from "../../components/error_message/CustomErrorMessage";
import Spinner from "../../components/spinner/Spinner";
import TabContent from "../../components/tab_content/TabContent";
import noImg from "../../assets/images/noImg.png";
import { getPersonById } from "../../services/ThemoviedbAPI";
import { IMG_URL_500 } from "../../constants/constants";
import { getAge } from "../../services/utils";
import styles from "./staff.module.css";

const staff = () => {
	const { staff_id } = useParams();
	const { data, error, isError, isLoading } = useQuery(
		["staff-page", staff_id],
		() => getPersonById(staff_id),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		}
	);

	return (
		<>
			<Title title={"Person"} />
			{isError && <CustomErrorMessage error={error} />}
			{isLoading && <Spinner />}
			{data && (
				<PageLayout>
					<BackButton />
					<Row className={styles.staffWrapper}>
						<Col md={4}>
							{data.profile_path ? (
								<img
									src={`${IMG_URL_500}${data.profile_path}`}
									alt={data.name}
									className={styles.poster}
								/>
							) : (
								<img
									src={noImg}
									alt={data.name}
									className={styles.poster}
								/>
							)}
						</Col>
						<Col className={styles.staffDescription}>
							<h1 className={styles.title}>{data.name}</h1>
							<p className={styles.subtitle}>
								{data.known_for_department},{" "}
								{getAge(data.birthday)} years old
							</p>
							<div className={styles.aboutPerson}>
								<p className={styles.personDescriprion}>
									{data.biography}
								</p>
								{data.place_of_birth && (
									<DescriptionTemplate
										title={"Place of birth:"}
										birthPlace={data.place_of_birth}
									/>
								)}
							</div>
						</Col>
					</Row>

					<Row className="my-5">
						<TabContent data={data} moviePage={false} />
					</Row>
				</PageLayout>
			)}
		</>
	);
};

export default staff;
