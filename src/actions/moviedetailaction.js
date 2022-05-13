import axios from "axios";
import { moviedetails } from "../components/api";
import { similarmovies } from "../components/api";
import { recommovies } from "../components/api";

export const moviedetailaction = (id,type) => async (dispatch) => {

    dispatch({
        type:"LOADING",
        payload:{
            isLoading:true
        }
    })

 const getmoviedetail = await axios.get(moviedetails(id,type))
 const getsimilarmov = await axios.get(similarmovies(id,type))
 const getrecommov = await axios.get(recommovies(id,type))
 console.log(getmoviedetail.data)

 dispatch({
     type:"FETCH_MOVIE_DETAILS",
     payload:{
         moviedetailact:getmoviedetail.data,
         isLoading:false,
         similar:getsimilarmov.data.results,
         recommended:getrecommov.data.results
     }
 })
} 