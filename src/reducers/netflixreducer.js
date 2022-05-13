const initialstate = {
    netflixorigin: [],
    actionm: [],
    horror: [],
    comedy: [],
    romance:[],
    documentarie:[],
    isLoading:true
  };
  
  export const Netorigin = (state = initialstate, action) => {
    switch (action.type) {
      case "FETCH_NETFLIX_ORIGIN":
        return {
          ...state,
          netflixorigin: action.payload.netflixorigin,
          actionm: action.payload.actionm,
          horror: action.payload.horror,
          comedy: action.payload.comedy,
          romance:action.payload.romance,
          documentarie:action.payload.document,
          isLoading:false
        };
       case "LOADING":
           return {...state,isLoading:true}
      default:
        return { ...state };
    }
  };
  