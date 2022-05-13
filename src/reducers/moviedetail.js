const initialstate = {
    moviedetail:{},
    isLoading:true,
    similar:[],
    recommended:[]
}

export const moviedetail = (state=initialstate,action) => {
    switch(action.type){
        case "FETCH_MOVIE_DETAILS":
            return {...state,moviedetail:action.payload.moviedetailact,isLoading:false,similar:action.payload.similar,recommended:action.payload.recommended}
        case "LOADING":
            return {...state,isLoading:true}
        default:
            return {...state}
    }
} 