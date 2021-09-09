import axios from "axios";
// import api key from .env
const { VITE_API_KEY } = import.meta.env;
const language = "&language=en-US";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// the common function for getting data (collection and byId)
const get = async (endpoint, page) => {
  let result;
	if (page) {
		result = await axios.get(
			`${endpoint}?api_key=${VITE_API_KEY}${language}&page=${page}`
		);
		return result.data;
  }
  // get specific data
	result = await axios.get(
		`${endpoint}?api_key=${VITE_API_KEY}&append_to_response=credits`
	);
  return result.data;
};

// get data for Home page
export const getPlayingMovies = async (page = null) => {
	return get(`/movie/now_playing`, page);
};

export const getMovieById = async (id) => {
	return get(`/movie/${id}`);
};

export const getPersonById = async(id) => {
	return get(`/person/${id}`);
}