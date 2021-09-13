import React from 'react'

const ButtonLoadMore = ({ ammountOfClick, onLoadMore }) => {
	return (
		<div className="button-wrapper">
			<button
				className={ammountOfClick === 0 ? "delete" : "loadMore_btn"}
				onClick={onLoadMore}
			>
				load more
			</button>
		</div>
	);
};

export default ButtonLoadMore
