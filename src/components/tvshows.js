import React,{useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import { useDispatch , useSelector} from "react-redux";
import styled from 'styled-components';
import {motion} from 'framer-motion'
import { imagepath } from './api';
import Moviehomerow from './moviehomerow';
import { Image } from './moviehomescreen';
import { Tvaction } from '../actions/tvaction';
import { Home } from './moviehomescreen';
import { Simplefade } from './animation';
import { LoadingImage } from './netflixoriginals';



const Tvshows = () => {

    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Tvaction())
  },[dispatch])

  const {trendingday,trendingweek,isLoading,popular,ontheair,toprated,todayair} = useSelector(state => state.tvshows)


    return(
        <Home variants={Simplefade} initial="hidden" animate="show" exit="exit">

        {isLoading && (
            <LoadingImage><img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" /></LoadingImage>

        )}

        {!isLoading && (
            <>
<Carousel style={{height:"85vh"}} pause="hover" fade={true}>
        {trendingday.map((movie,i) => {
            return <Carousel.Item style={{height:"85vh"}} key={i}>
            <Image src={`${imagepath}${movie.backdrop_path}`} alt="image" />
        </Carousel.Item>
        })
            
        }
        
        </Carousel>

            <Moviehomerow movie={todayair} title={'today'} type="tv"/>
            <Moviehomerow movie={ontheair} title={'on the air'} type="tv"/>
            <Moviehomerow movie={trendingweek} title={'trending'} type="tv"/>

            <Moviehomerow movie={popular} title={'popular'} type="tv"/>
            <Moviehomerow movie={toprated} title={'Top Rated'} type="tv"/>
            </>
        )}
        
        
          
        </Home>
    )

}

export default Tvshows