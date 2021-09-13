import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { Col, Row } from "react-bootstrap";

import Title from "../../components/title/Title";
import CustomErrorMessage from "../../components/error_message/CustomErrorMessage";
import CompaniesLogo from "./page_components/companies_logo/CompaniesLogo";
import Rating from "./page_components/rating_component/Rating";
import PageLayout from "../../components/layout/PageLayout";
import DescriptionTemplate from "../../components/description_template/DescriptionTemplate";
import TabContent from "../../components/tab_content/TabContent";
import BackButton from "../../components/back_button/BackButton";
import Image from "../../components/image/Image";
import Spinner from "../../components/spinner/Spinner";
import { getMovieById } from "../../services/ThemoviedbAPI";
import styles from "./movie.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const movie = () => {
	let location = useLocation();
	const { movie_id } = useParams();
	const { data, error, isError, isLoading } = useQuery(
		["single-movie", movie_id],
		() => getMovieById(movie_id),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		}
	);

	const [storedValue, setValue] = useLocalStorage("watchedMovies", []);

	useEffect(() => {
		setValue({ id: uuidv4(), url: location.pathname });
	}, [data]);

	return (
		<>
			<Title type={"Movie"} />
			{isError && <CustomErrorMessage error={error} />}
			{isLoading && <Spinner />}
			{data && (
				<PageLayout>
					<BackButton />
					<Row className={styles.filmWrapper}>
						<Col md={5}>
							<Image
								poster={data.poster_path}
								alt={data.title}
								bigImg={true}
								className={styles.poster}
							/>
						</Col>

						<Col className={styles.filmText}>
							<h1 className={styles.filmTitle}>{data.title}</h1>
							<p className={styles.filmSibtitle}>
								{data.tagline}
							</p>
							<div className={styles.aboutFilm}>
								<p className={styles.filmDescriprion}>
									{data.overview}
								</p>

								<DescriptionTemplate
									title={"Languages:"}
									items={data.spoken_languages}
								/>

								<DescriptionTemplate
									title={"Country:"}
									items={data.production_countries}
								/>

								{data.budget !== 0 && (
									<DescriptionTemplate
										title={"Budget:"}
										budget={data.budget}
									/>
								)}

								<DescriptionTemplate
									title={"Premiere:"}
									releaseDate={data.release_date}
								/>
							</div>

							<Rating
								voteAverage={data.vote_average}
								voteCount={data.vote_count}
							/>
						</Col>
					</Row>

					<CompaniesLogo companies={data.production_companies} />

					<TabContent data={data} moviePage={true} />
				</PageLayout>
			)}
		</>
	);
};

export default movie;
