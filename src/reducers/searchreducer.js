const initialstate = {
    searched:[],
    isLoading:true
}

export const searchreducer = (state=initialstate,action) => {
    switch(action.type){
        case "FETCH_SEARCH_RESULTS":
            return {...state,searched:action.payload.searched,isLoading:false}
        case "LOADING":
            return {...state,isLoading:true};
        default:
            return {...state}
    }
}