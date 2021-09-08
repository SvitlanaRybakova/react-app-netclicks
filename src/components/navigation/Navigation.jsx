import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiTrophyCup } from "react-icons/gi";
import { FaTheaterMasks } from "react-icons/fa";
import { VscHistory, VscHome } from "react-icons/vsc";


import { ratingLinks } from "../../constants/navLinks";

import styles from "./Navigation.module.css";

const Navigation = () => {
	const [isOpenMenu, setOpenMenu] = useState(false);
	const [isOpenRating, setOpenRating] = useState(false);
	const [isOpenGenre, setOpenGenre] = useState(false);
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
						<NavLink
							exact
							to="/rating"
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
						</NavLink>
						<ul className={styles.dropdownList}>
							{ratingLinks.map((link) => (
								<li key={link.id}>
									<NavLink to={link.link}>
										<span>{link.name}</span>
									</NavLink>
								</li>
							))}
						</ul>
					</li>
					<li>
						<NavLink
							exact
							to="/genres"
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
						</NavLink>
						<ul className={styles.dropdownList}>
							{/* !!!!!! TODO update links depends on API */}

							<li>
								<NavLink to="/genres/comedy">
									<span>Comedy</span>
								</NavLink>
							</li>
							{/* <li>
								<NavLink to="/genres/drama">
									<span>Drama</span>
								</NavLink>
							</li> */}
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navigation;