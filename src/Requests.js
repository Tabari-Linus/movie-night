const apikey = process.env.REACT_APP_API_KEY


const requests = {
    fetchTrending: `/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apikey}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apikey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apikey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apikey}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${apikey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apikey}&with_genres=10749`,
    fetchDocumentory: `/discover/movie?api_key=${apikey}&with_genres=99`,
}

export default requests;