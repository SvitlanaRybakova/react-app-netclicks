import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
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
	const location = useLocation();
	const { movie_id } = useParams();
	const { data, error, isError, isLoading } = useQuery(
		["single-movie", movie_id],
		() => getMovieById(movie_id),
	);

	const [storedValue, setValue] = useLocalStorage("watchedMovies", []);

	useEffect(() => {
		setValue({ id: movie_id, url: location.pathname });
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
									title={"Genres:"}
									items={data.genres}
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
						{/* RELATED MOVIES */}
						
							<div className={styles.relatedMovie}>
							<Link to={`/related/${movie_id}`}>
								Top 20 related movies
							</Link>
						</div>
					
						
					</Row>

					<CompaniesLogo companies={data.production_companies} />

					<TabContent data={data} moviePage={true} />
				</PageLayout>
			)}
		</>
	);
};

export default movie;
