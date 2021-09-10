import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

function PaginationBasic({ currentPage, setCurrentPage, totalPages }) {
	// number of pages
	const [pageArray, setPageArray] = useState([]);

	useEffect(() => {
		// array with visible part of pages
		let pageArr = [];

		// don't invokes if totalPages ===1
		if (totalPages > 1) {
			// 1, 2, 3, 4, 5, 6, 7, 8, ... , last one
			if (totalPages <= 9) {
				let i = 1;
				while (i <= totalPages) {
					pageArr.push(i);
					i++;
				}
			} else {
				if (currentPage <= 5) {
					pageArr = [1, 2, 3, 4, 5, 6, 7, 8, "", totalPages];
				} else if (totalPages - currentPage <= 4) {
					pageArr = [
						1,
						"",
						totalPages - 7,
						totalPages - 6,
						totalPages - 5,
						totalPages - 4,
						totalPages - 3,
						totalPages - 2,
						totalPages - 1,
						totalPages,
					];
				} else
					pageArr = [
						1,
						"",
						currentPage - 3,
						currentPage - 2,
						currentPage - 1,
						currentPage,
						currentPage + 1,
						currentPage + 2,
						currentPage + 3,
						"",
						totalPages,
					];
			}
		}
		setPageArray(pageArr);
	}, []);

	return (
		<>
			<div style={{ marginTop: "15px" }}>
				<Pagination style={{ justifyContent: "center" }}>
					{pageArray.map((element, index) => {
						// temporary array
						const toReturn = [];
						// toReturn contains with 3 obj(firstpage, prevpage, current index page === 0)
						if (index === 0) {
							toReturn.push(
								<Pagination.First
									key={"firstpage"}
									onClick={
										currentPage === 1
											? () => {}
											: () => {
													setCurrentPage(1);
											  }
									}
								/>
							);

							toReturn.push(
								<Pagination.Prev
									key={"prevpage"}
									onClick={
										currentPage === 1
											? () => {}
											: () => {
													setCurrentPage(
														currentPage - 1
													);
											  }
									}
								/>
							);
						}

						if (element === "") {
							toReturn.push(<Pagination.Ellipsis key={index} />);
						} else
							toReturn.push(
								<Pagination.Item
									key={index}
									active={
										currentPage === element ? true : false
									}
									onClick={
										currentPage === element
											? () => {}
											: () => {
													setCurrentPage(element);
											  }
									}
								>
									{element}
								</Pagination.Item>
							);

						if (index === pageArray.length - 1) {
							toReturn.push(
								<Pagination.Next
									key={"nextpage"}
									onClick={
										currentPage === element
											? () => {}
											: () => {
													setCurrentPage(
														currentPage + 1
													);
											  }
									}
								/>
							);

							toReturn.push(
								<Pagination.Last
									key={"lastpage"}
									onClick={
										currentPage === element
											? () => {}
											: () => {
													setCurrentPage(element);
											  }
									}
								/>
							);
						}

						return toReturn;
					})}
				</Pagination>
			</div>
		</>
	);
}

export default PaginationBasic;
