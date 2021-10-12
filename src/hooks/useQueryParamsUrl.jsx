import React, { useState, useEffect } from "react";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";
import { useLocation } from "react-router-dom";

const useQueryParamsUrl = () => {
	let location = useLocation();
	const [pageParam, setPageParam] = useQueryParam("page", NumberParam);
	const [queryParam, setQueryParam] = useQueryParam("query", StringParam);
	const [currentPage, setCurrentPage] = useState(1);

	// sets the same value to currentPage (as pageParams) if pageParam has been changed (by button back)
	useEffect(() => {
		if (!pageParam) {
			setPageParam(1);
		}
		if (pageParam && pageParam !== currentPage) {
			setCurrentPage(pageParam);
		}
	}, [pageParam]);

	// sets the same value to pageParams (as pageParams) if currentPage has been changed (by pagination)
	useEffect(() => {
		if (currentPage && currentPage !== pageParam) {
			setPageParam(currentPage);
		}
	}, [currentPage]);

  
	useEffect(() => {
	//if pageParam is undefined 
		if (!pageParam) {
			setPageParam(1);
		} else {
			// prevent the eternal loop if page Param manually changes in URL 
      setPageParam(parseInt(location.search.match(/([\d]+)/g)));

		}
	}, []);

	return {
		currentPage,
		setCurrentPage,
		setQueryParam,
	};
};

export default useQueryParamsUrl;
