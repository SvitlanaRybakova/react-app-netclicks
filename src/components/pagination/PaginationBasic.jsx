import React from "react";
import { Button } from "react-bootstrap";

const PaginationBasic = ({ page, setPage, totalPages }) => {
	return (
		<div className="d-flex justify-content-between align-items-center m-5">
			<Button
				onClick={() =>
					setPage((currentPage) => Math.max(currentPage - 1, 1))
				}
				disabled={page === 1}
			>
				Previous
			</Button>

			<span>Current Page: {page}</span>

			<Button
				onClick={() => {
					if (page <= totalPages) {
						setPage((currentPage) => currentPage + 1);
					}
				}}
				disabled={page === totalPages}
			>
				Next Page
			</Button>
		</div>
	);
};

export default PaginationBasic;
