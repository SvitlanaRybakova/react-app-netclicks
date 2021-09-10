import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GiTrophyCup } from "react-icons/gi";
import { FaTheaterMasks } from "react-icons/fa";
import { VscHistory, VscHome } from "react-icons/vsc";
import { useQuery } from "react-query";

import { ratingLinks } from "../../constants/navLinks";
import { getGenreMovieList } from "../../services/ThemoviedbAPI";
import styles from "./Navigation.module.css";

const Navigation = () => {
	const [isOpenMenu, setOpenMenu] = useState(false);
	const [isOpenRating, setOpenRating] = useState(false);
	const [isOpenGenre, setOpenGenre] = useState(false);
	const { data, isError, isLoading } = useQuery(
		["navigation"],
		() => getGenreMovieList(),
		{
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
		}
	);

	return (
		<>
			<div
				className={
					isOpenMenu
						? styles.leftMenu
						: `${styles.leftMenu} ${styles.openMenu}`
				}
			>
				<div
					onClick={() => setOpenMenu(!isOpenMenu)}
					className={
						isOpenMenu
							? `${styles.hamburger} ${styles.active}`
							: ` ${styles.hamburger} ${styles.active} ${styles.open}`
					}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className={styles.leftMenu__list}>
					<li>
						<NavLink to="/">
							<VscHome />
							<span>HOME</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/history">
							<VscHistory />
							<span>HISTORY</span>
						</NavLink>
					</li>
					<li>
						<div
							className={
								isOpenRating
									? styles.dropdown
									: `${styles.dropdown} ${styles.active}`
							}
							onClick={() => {
								setOpenRating(!isOpenRating);
							}}
						>
							<GiTrophyCup />
							<span>RATING</span>
						</div>
						<ul className={styles.dropdownList}>
							{ratingLinks.map((link) => (
								<li key={uuidv4()}>
									<NavLink to={link.link}>
										<span>{link.name}</span>
									</NavLink>
								</li>
							))}
						</ul>
					</li>
					<li>
						<div
							className={
								isOpenGenre
									? styles.dropdown
									: `${styles.dropdown} ${styles.active}`
							}
							onClick={() => {
								setOpenGenre(!isOpenGenre);
							}}
						>
							<FaTheaterMasks />
							<span>GENRES</span>
						</div>
						{isError && <li> Request failed </li>}
						{isLoading && <li>Loading...</li>}
						{data && (
							<ul className={styles.dropdownList}>
								{data.genres.map((genre) => {
									return (
										<li key={genre.id}>
											<NavLink
												to={`/genres/${genre.name}`}
											>
												<span>{genre.name}</span>
											</NavLink>
										</li>
									);
								})}
							</ul>
						)}
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navigation;
