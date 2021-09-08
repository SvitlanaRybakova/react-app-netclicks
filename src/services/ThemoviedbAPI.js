import axios from "axios";
// import api key from .env
const { VITE_API_KEY } = import.meta.env;
const language = "&language=en-US";


axios.defaults.baseURL = "https://api.themoviedb.org/3";

// the common function for getting data
const get = async (endpoint, page) => {
	const res = await axios.get(
		`${endpoint}?api_key=${VITE_API_KEY}${language}&page=${page}`
	);
	return res.data;
};

// get data for Home page
export const getPlayingMovies = async(page = null) => {
	return get(`/movie/now_playing`, page);
};
