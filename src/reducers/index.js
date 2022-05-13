import {combineReducers} from 'redux'
import { allMovies } from './moviesreducer'
import { allTvshows } from './tvreducers'
import { Netorigin } from './netflixreducer'
import { moviedetail } from './moviedetail'
import { searchreducer } from './searchreducer'

export const allreducers = combineReducers({
    movies:allMovies,
    tvshows:allTvshows,
    Originals:Netorigin,
    mDetail:moviedetail,
    search:searchreducer
})