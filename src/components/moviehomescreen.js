import React,{useEffect,useState} from 'react'
import {movieaction} from '../actions/movieactions'
import { useDispatch , useSelector} from "react-redux";
import styled from 'styled-components';
import { LoadingImage } from './netflixoriginals';
import {motion} from 'framer-motion'
import { imagepath } from './api';
import Moviehomerow from './moviehomerow';
import { Simplefade } from './animation';
import { useScroll } from './useScroll';
import { Simplescale } from './animation';



const Moviehomescreen = () => {

   const [element,controlanimation] = useScroll()
   

    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(movieaction())
  },[dispatch])

  const {trendingday,trendingweek,popular,upcoming,toprated,nowplay,isLoading} = useSelector(state => state.movies)


    return(
        <Home variants={Simplefade} initial="hidden" animate="show" exit="exit">
        

        {isLoading && (
            <LoadingImage ><img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" /></LoadingImage>
        )}

        {!isLoading && (
            <>
         <Image src={`${imagepath}${trendingday[Math.trunc(Math.random() * 20) + 1].backdrop_path}`} alt="image"  />
            {/* <Motionhomescreenrow variants={Simplefade} ref={element} initial="hidden" animate={controlanimation}> */}
            <Moviehomerow movie={nowplay} title={'Now playing'}  type="movie" />
            <Moviehomerow movie={trendingweek} title={'Trending this Week'} type="movie" />
            <Moviehomerow movie={popular} title={'popular'} type="movie" />
            <Moviehomerow movie={upcoming} title={'upcoming'} type="movie" />
            <Moviehomerow movie={toprated} title={'Top Rated'} type="movie" />
            {/* </Motionhomescreenrow> */}
            </>
        )}
        
            
            

        

        
        
          
        </Home>

        
    )

}

export const Home = styled(motion.div)`
width:100%;
height:100vh;
position: relative;


`

export const Image = styled(motion.img)`
margin: auto;
object-fit: cover;
width:100%;
height:100%;
-webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

`

const Motionhomescreenrow = styled(motion.div)`
padding: .1rem;
`

export default Moviehomescreen