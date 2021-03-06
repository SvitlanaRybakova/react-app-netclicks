import React from "react";
import { IMG_URL_185 } from "../../constants/constants";
import { IMG_URL_500 } from "../../constants/constants";
import noImage from "../../assets/images/noImg.png";

const Image = ({ isShown, backdrop, poster, title, bigImg, className=null }) => {
	return (
		<>
			{bigImg && <img src={`${IMG_URL_500}${poster}`} alt={title} />}

			{!backdrop && poster && !bigImg && (
				<img
					style={{
						height: "278px",
						width: "185px",
					}}
					src={`${IMG_URL_185}${poster}`}
					alt={title}
					className={className}
				/>
			)}
			{!poster && className && (
				<img
					style={{ height: "278px", width: "185px" }}
					src={noImage}
					alt={title}
					className={className}
				/>
			)}
			{!poster && !className && (
				<img
					style={{ height: "278px", width: "185px" }}
					src={noImage}
					alt={title}
				/>
			)}
			{backdrop && poster && (
				<img
					style={{ height: "278px", width: "185px" }}
					src={
						isShown
							? `${IMG_URL_185}${backdrop}`
							: `${IMG_URL_185}${poster}`
					}
					alt={title}
				/>
			)}
		</>
	);
};

export default Image;
