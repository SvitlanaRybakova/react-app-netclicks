import axios from "axios";

const { VITE_API_KEY } = import.meta.env;


axios.defaults.baseURL = "https://api.themoviedb.org/3";

const get = async (endpoint) => {
	const res = await axios.get(
		`${endpoint}?api_key=${VITE_API_KEY}&language=en-US`
	);
	return res.data;
};

export const getPlayingMovies = async () => {
	return get(`/movie/now_playing`);
};
