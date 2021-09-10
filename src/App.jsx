import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import PageNotFound from "./pages/not_found/notFound";
import HomePage from "./pages/home/HomePage";
import TopRatedPage from "./pages/rating/rating";
import GenresPage from "./pages/genres/genres";
import HistoryPage from "./pages/history/history";
import MoviePage from "./pages/movie_single/movie";
import StaffPage from "./pages/staff/staff";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>

				<Route path="/movies/:movie_id">
					<MoviePage />
				</Route>

				<Route path="/rating/:type">
					<TopRatedPage />
				</Route>

				<Route path="/genres/:type/:id">
					<GenresPage />
				</Route>

				<Route path="/staff/:staff_id">
					<StaffPage />
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
