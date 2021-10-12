import React from "react";
import { Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import Navigation from "./components/navigation/Navigation";
import PageNotFound from "./pages/not_found/notFound";
import HomePage from "./pages/home/HomePage";
import TopRatedPage from "./pages/rating/rating";
import GenresPage from "./pages/genres/genres";
import HistoryPage from "./pages/history/history";
import MoviePage from "./pages/movie_single/movie";
import StaffPage from "./pages/staff/staff";
import TrendingMoviePage from "./pages/trending_movies/TrendingMovies";
import RelatedMoviesPage from "./pages/related_movies/RelatedMovies";

function App() {
	return (
		<div className="App">
			<QueryParamProvider ReactRouterRoute={Route}>
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

					<Route path="/trending/:type">
						<TrendingMoviePage />
					</Route>

					<Route path="/related/:movie_id">
						<RelatedMoviesPage />
					</Route>

					<Route path="/history">
						<HistoryPage />
					</Route>

					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</QueryParamProvider>
		</div>
	);
}

export default App;
