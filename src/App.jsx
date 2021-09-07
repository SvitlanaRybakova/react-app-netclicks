import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./components/navigation/Navigation";
import PageNotFound from "./pages/not_found/notFound";
import HomePage from "./pages/home/HomePage";
import TopRatedPage from "./pages/rating/rating";
import GenresPage from "./pages/genres/genres";
import HistoryPage from "./pages/history/history";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>

				<Route path="/rating/:type?">
					<TopRatedPage />
				</Route>

				<Route path="/genres/:type?">
					<GenresPage />
				</Route>

				<Route path="/history">
					<HistoryPage />
				</Route>

				<Route>
					<PageNotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
