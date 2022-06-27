const API_KEY = "YOUR_API_KEY";

const requests = {
  fetchRecommendedMovies: `/movie/11/recommendations?api_key=${API_KEY}`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,
};

export default requests;
