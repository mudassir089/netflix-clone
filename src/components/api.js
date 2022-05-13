

export const mainapikey = '0ac5e00f546b3ab7a88227861725085b'
export const mainbaseurl = 'https://api.themoviedb.org/3'
export const imagepath = 'https://image.tmdb.org/t/p/original'
export const smallImage = "https://image.tmdb.org/t/p/w500"

export const trendingmoviesweek = `${mainbaseurl}/trending/movie/week?api_key=${mainapikey}&language=en-US`
export const trendingmoviesday = `${mainbaseurl}/trending/movie/day?api_key=${mainapikey}&language=en-US`
export const latestmovies = `${mainbaseurl}/movie/latest?api_key=${mainapikey}&language=en-US`
export const popularmovies = `${mainbaseurl}/movie/popular?api_key=${mainapikey}&language=en-US`
export const upcomingmovies = `${mainbaseurl}/movie/upcoming?api_key=${mainapikey}&language=en-US`
export const topratedmov = `${mainbaseurl}/movie/top_rated?api_key=${mainapikey}&language=en-US`
export const nowplaying = `${mainbaseurl}/movie/now_playing?api_key=${mainapikey}&language=en-US`
export const latesttvshows = `${mainbaseurl}/tv/latest?api_key=${mainapikey}&language=en-US`
export const populartvshows = `${mainbaseurl}/tv/popular?api_key=${mainapikey}&language=en-US`
export const ontheairtvshows = `${mainbaseurl}/tv/on_the_air?api_key=${mainapikey}&language=en-US`
export const todaytvshows = `${mainbaseurl}/tv/airing_today?api_key=${mainapikey}&language=en-US`
export const trendingtvday = `${mainbaseurl}/trending/tv/day?api_key=${mainapikey}&language=en-US`
export const trendingtvweek = `${mainbaseurl}/trending/tv/week?api_key=${mainapikey}&language=en-US`
export const topratedtv = `${mainbaseurl}/tv/top_rated?api_key=${mainapikey}&language=en-US`
export const Netflixoriginals = `${mainbaseurl}/discover/tv?api_key=${mainapikey}&with_networks=213&language=en-US`
export const actionmovie = `${mainbaseurl}/discover/movie?api_key=${mainapikey}&with_genres=28&language=en-US`
export const comedymovie = `${mainbaseurl}/discover/movie?api_key=${mainapikey}&with_genres=35&language=en-US`
export const horrormovie = `${mainbaseurl}/discover/movie?api_key=${mainapikey}&with_genres=27&language=en-US`
export const romancemovie = `${mainbaseurl}/discover/movie?api_key=${mainapikey}&with_genres=10749&language=en-US`
export const documentaries = `${mainbaseurl}/discover/movie?api_key=${mainapikey}&with_genres=99&language=en-US`
export const moviedetails = (id,type) => `${mainbaseurl}/${type}/${id}?api_key=${mainapikey}&language=en-US`
export const similarmovies = (id,type) => `${mainbaseurl}/${type}/${id}/similar?api_key=${mainapikey}&language=en-US`
export const recommovies = (id,type) => `${mainbaseurl}/${type}/${id}/recommendations?api_key=${mainapikey}&language=en-US`
export const searchresults = (query) => `${mainbaseurl}/search/multi?api_key=${mainapikey}&query=${query}`