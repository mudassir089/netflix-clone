import axios from "axios";
import { Netflixoriginals,actionmovie,horrormovie,comedymovie,romancemovie,documentaries } from "../components/api";

export const netflixaction = () => async (dispatch) => {


    dispatch({
        type:"LOADING",
        payload:{
            isLoading:true
        }
    })

    const getnetflixorigin = await axios.get(Netflixoriginals)
    const getaction = await axios.get(actionmovie)
    const gethorror = await axios.get(horrormovie)
    const getcomedy = await axios.get(comedymovie)
    const getromance = await axios.get(romancemovie)
    const getdocumentaries = await axios.get(documentaries)


    dispatch({
        type:"FETCH_NETFLIX_ORIGIN",
        payload:{
            netflixorigin:getnetflixorigin.data.results,
            actionm:getaction.data.results,
            horror:gethorror.data.results,
            comedy:getcomedy.data.results,
            romance:getromance.data.results,
            document:getdocumentaries.data.results,
            isLoading:false
        }
    })
}