const initialstate = {
    trendingday: [],
    trendingweek: [],
    popular: [],
    latest: [],
    ontheair:[],
    toprated:[],
    todayair:[],
    isLoading:true
  };
  
  export const allTvshows = (state = initialstate, action) => {
    switch (action.type) {
      case "FETCH_TV_SHOWS":
        return {
          ...state,
          trendingday: action.payload.trendingday,
          trendingweek: action.payload.trendingweek,
          latest: action.payload.latest,
          popular: action.payload.popular,
          ontheair:action.payload.ontheair,
          toprated:action.payload.toprated,
          todayair:action.payload.todayair,
          isLoading:false
        };
      case "LOADING":
        return {...state,isLoading:true}
      default:
        return { ...state };
    }
  };