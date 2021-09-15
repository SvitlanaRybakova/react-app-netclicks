import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";
import Title from "../../components/title/Title";
import BackButton from '../../components/back_button/BackButton';
import useLocalStorage from "../../hooks/useLocalStorage";

const history = () => {
	const [storedValue, setValue] = useLocalStorage();
	console.log(storedValue);
	return (
		<>
			<Title title={"History"} />
			<PageLayout>
				<BackButton />
				<h3 className="text-center m-5">Here are the last movies where you have seen</h3>

				{storedValue &&
					storedValue.map((link, index) => (
						<p className="m-3" key={link.id}>
							<Link to={link.url}>Movie # {index+1} </Link>
						</p>
					))}
			</PageLayout>
		</>
	);
};

export default history;
