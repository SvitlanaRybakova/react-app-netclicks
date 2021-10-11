import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";

import PageLayout from "../../components/layout/PageLayout";
import Title from "../../components/title/Title";
import BackButton from "../../components/back_button/BackButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import HistoryCard from "./historyCard/HistoryCard";

const history = () => {
	const [storedValue, setValue] = useLocalStorage();

	return (
		<>
			<Title title={"History"} />
			<PageLayout>
				<BackButton />
				<h3 className="text-center m-5">
					Here are the last movies where you have seen
				</h3>

				<div style={{ display: "flex", flexWrap:"wrap" }}>
					{storedValue &&
						storedValue.map((link, index) => (
							<HistoryCard key={uuidv4()} id={link.id} />
						))}
				</div>
			</PageLayout>
		</>
	);
};

export default history;
