import axios from "axios";
// import api key from .env
const { VITE_API_KEY } = import.meta.env;
const language = "&language=en-US";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// for get films colection or search-resalt
const get = async (endpoint, page, query) => {
	let result;
	// multi language search
	if (query) {
		result = await axios.get(
			`${endpoint}?api_key=${VITE_API_KEY}&query=${query}&page=${page}`
		);
		return result.data;
	}
	// returns data with page for paginering
	result = await axios.get(
		`${endpoint}?api_key=${VITE_API_KEY}${language}&page=${page}`
	);

	return result.data;
};

// get specific data with append to response
const getById = async (endpoint) => {
	const result = await axios.get(
		`${endpoint}?api_key=${VITE_API_KEY}&append_to_response=credits`
	);
	return await result.data;
};

export const getMovie = async (page = null, query = null) => {
	if (query) {
		return get(`/search/movie`, page, query);
	}
	return get(`/movie/now_playing`, page);
};

export const getMovieById = async (id) => {
	return getById(`/movie/${id}`);
};

export const getPersonById = async (id) => {
	return getById(`/person/${id}`);
};

export const getRatedMovies = async (type, page = null) => {
	return get(`/movie/${type}`, page);
};
