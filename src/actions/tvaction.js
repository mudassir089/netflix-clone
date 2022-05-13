import axios from "axios"
import { latesttvshows,populartvshows,ontheairtvshows,todaytvshows,trendingtvday,trendingtvweek,topratedtv } from "../components/api"


export const Tvaction = () => async (dispatch) => {

    dispatch({
        type:"LOADING",
        payload:{
            isLoading:true
        }
    })

    const gettrendingtv = await axios.get(trendingtvday)
    const gettrendingtvweek = await axios.get(trendingtvweek)
    const getlatesttv = await axios.get(latesttvshows)
    const getpopulartv = await axios.get(populartvshows)
    const getontheair = await axios.get(ontheairtvshows)
    const gettoptv = await axios.get(topratedtv)
    const gettodaytv = await axios.get(todaytvshows)


    dispatch({
        type:"FETCH_TV_SHOWS",
        payload:{
            trendingday:gettrendingtv.data.results,
            trendingweek:gettrendingtvweek.data.results,
            latest:getlatesttv.data.results,
            popular:getpopulartv.data.results,
            ontheair:getontheair.data.results,
            toprated:gettoptv.data.results,
            todayair:gettodaytv.data.results,
            isLoading:false
        }
    })
}