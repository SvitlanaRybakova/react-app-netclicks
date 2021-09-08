import axios from "axios";

const { VITE_API_KEY } = import.meta.env;

const IMG_URL = "https://image.tmdb.org/t/p/w500";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
	const res = await axios.get(
		`${endpoint}?api_key=${VITE_API_KEY}&language=en-US`
	);
	return res;
};

export const getPlayingMovies = async () => {
	return get(`/movie/now_playing`);
};
