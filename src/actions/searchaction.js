import axios from 'axios'
import { searchresults } from '../components/api'

export const Searchaction = (query) => async (dispatch) =>{

    dispatch({
        type:"LOADING",
        payload:{
            isLoading:true
        }
    })

const searchdata = await axios.get(searchresults(query))

dispatch({
    type:"FETCH_SEARCH_RESULTS",
    payload:{
        searched:searchdata.data.results,
        isLoading:false
    }
})



}