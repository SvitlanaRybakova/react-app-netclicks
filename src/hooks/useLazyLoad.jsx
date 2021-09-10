import React, { useState } from "react";

const LazyLoader = () => {
	const [limit, setLimit] = useState(6);

	// TODO определяю количество кликов по кнопке, нужен контекст!
	// const ammountOfClick =  Math.floor(castData.length / limit);
  const ammountOfClick = 3

	const onLoadMore = (e) => {
		e.preventDefault();
		if (ammountOfClick > 0) {
			setLimit((prev) => prev + 6);
		}
	};

	return { limit, ammountOfClick, onLoadMore };
};

export default LazyLoader;
