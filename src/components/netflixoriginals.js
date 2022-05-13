import React,{useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import { useDispatch , useSelector} from "react-redux";
import {motion} from 'framer-motion'
import { imagepath } from './api';
import Moviehomerow from './moviehomerow';
import { netflixaction } from '../actions/netflixaction';
import { Home } from './moviehomescreen';
import styled from 'styled-components';
import { Image } from './moviehomescreen';
import { Simplefade } from './animation';

function  Netflixoriginals() {

    const onchanging = (e) => {
        const changingval = e.target.value
        const newval = changingval.tolowerCase().replace(' ','+')
        console.log(newval)
    }


    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(netflixaction())
    },[dispatch])

    const {netflixorigin,actionm,horror,comedy,romance,documentarie,isLoading} = useSelector(state => state.Originals)

    return (
            <Home variants={Simplefade} initial="hidden" animate="show" exit="exit">

        {isLoading && (
            <LoadingImage><img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" /></LoadingImage>
        )}

        {!isLoading && (
            <>
            <Carousel style={{height:"85vh"}} pause="hover" fade={true}>
        {netflixorigin && netflixorigin.map((movie,i) => {
            return <Carousel.Item style={{height:"85vh"}} key={i}>
            <Image src={`${imagepath}${movie.backdrop_path}`} alt="image" />
        </Carousel.Item>
        })
            
        }
        
        </Carousel>

        
           <Moviehomerow movie={netflixorigin} title={'Netflix Originals'} type="movie"/>
           <Moviehomerow movie={actionm} title={'Action Movies'} type="movie"/>
            <Moviehomerow movie={comedy} title={'Comedy Movies'} type="movie"/>
        
            <Moviehomerow movie={horror} title={'Horror Movies'} type="movie"/>
       
            <Moviehomerow movie={romance} title={'Romantic Movies'} type="movie"/>
            <Moviehomerow movie={documentarie} title={'Documentaries'} type="movie"/>
       </>
            )}
    </Home>
 )}


 export const LoadingImage = styled(motion.div)`
 width: 100%;
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: center;

 img{
     width:200px;
     height:50px;
     object-fit: cover;
 }


 
 `

export default Netflixoriginals
