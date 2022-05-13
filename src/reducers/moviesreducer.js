const initialstate = {
  trendingday: [],
  trendingweek: [],
  popular: [],
  latest: [],
  upcoming:[],
  toprated:[],
  nowplay:[],
  isLoading:true
};

export const allMovies = (state = initialstate, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        trendingday: action.payload.trendingday,
        trendingweek: action.payload.trendingweek,
        latest: action.payload.latest,
        popular: action.payload.popular,
        upcoming:action.payload.upcoming,
        toprated:action.payload.toprated,
        nowplay:action.payload.nowplay,
        isLoading:false
      };
    case "LOADING":
      return {...state,isLoading:true}
    default:
      return { ...state };
  }
};
