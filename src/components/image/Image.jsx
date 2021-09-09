import React from "react";
import { IMG_URL_185 } from "../../constants/constants";
import { IMG_URL_500 } from "../../constants/constants";
import noImage from "../../assets/images/noImg.png";
const Image = ({ isShown, backdrop, poster, title, bigImg }) => {
	return (
		<>
			{bigImg && <img src={`${IMG_URL_500}${poster}`} alt={title} />}

			{!backdrop && poster && !bigImg && (
				<img
					style={{
						height: "278px",
						width: "185px",
						border: "1px solid red",
					}}
					src={`${IMG_URL_185}${poster}`}
					alt={title}
				/>
			)}
			{!poster && (
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
