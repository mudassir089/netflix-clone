import axios from "axios";
import { trendingmoviesday,trendingmoviesweek,latestmovies,popularmovies,upcomingmovies,topratedmov,nowplaying } from "../components/api";

export const movieaction = () => async (dispatch) => {

    dispatch({
        type:"LOADING",
        payload:{
            isLoading:true
        }
    })


    const gettrendingmov = await axios.get(trendingmoviesday)
    const gettrendingmovweek = await axios.get(trendingmoviesweek)
    const getlatestmovies = await axios.get(latestmovies)
    const getpopularmovies = await axios.get(popularmovies)
    const getupcomingmovies = await axios.get(upcomingmovies)
    const gettopmovies = await axios.get(topratedmov)
    const getnowplaying = await axios.get(nowplaying)


    dispatch({
        type:"FETCH_MOVIES",
        payload:{
            trendingday:gettrendingmov.data.results,
            trendingweek:gettrendingmovweek.data.results,
            latest:getlatestmovies.data.results,
            popular:getpopularmovies.data.results,
            upcoming:getupcomingmovies.data.results,
            toprated:gettopmovies.data.results,
            nowplay:getnowplaying.data.results,
            isLoading:false
        }
    })
}