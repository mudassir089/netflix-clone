import React from "react";
import { Image } from "./moviehomescreen";
import {useSelector} from 'react-redux'
import { LoadingImage } from "./netflixoriginals";
import { imagepath } from "./api";
import styled from "styled-components";
import {motion} from 'framer-motion'
import Moviehomerow from "./moviehomerow";
function Moviedetailrender() {

    const {moviedetail,isLoading,similar,recommended} = useSelector(state => state.mDetail)

    return (
        <div>
            {isLoading && (
                <LoadingImage><img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" /></LoadingImage>
            )}
            {!isLoading && (
                <>
                <Imagediv>
                <Image src={`${imagepath}${moviedetail.backdrop_path}`}/>
                <Textdiv>
                    <h1>{moviedetail.title ? moviedetail.title : moviedetail.name}</h1>
                    <h3>{moviedetail.release_date}</h3>
                    <p>{moviedetail.overview}</p>
                    <Btn>Play</Btn>
                </Textdiv>
                </Imagediv>
            <Moviehomerow movie={similar} type={'movie' ? 'movie' : 'tv'} title={'similar movies'}/>
            <Moviehomerow movie={recommended} type={'movie' ? 'movie' : 'tv'} title={'recommended movies'}/>
                </>
            )}
        </div>
    )
}



const Imagediv = styled(motion.div)`
width:100%;
height:100vh;
position: relative;
`

const Textdiv = styled.div`
width: 50rem;
position: absolute;
top: 50%;
left: 5%;
padding: 1rem;

@media(max-width:768px){
    left: 2%;
    width: 95%;

    h1{
        font-size: 2.5rem;
    }

    h2{
        font-size: 1.8rem;
    }

    p{
        font-size: 1.3rem;
    }
}

h1{
    font-size:4rem;
    color:#fff;
    font-weight: 600;
}

h3{
    font-size: 2rem;
    color: #fff;
    margin:.3rem 0;
}

p{
    font-size:1.5rem;
    margin: .5rem 0;
    color: #fff;
    height: 8rem;
    overflow: hidden;

    @media(max-width:768px){
        width: 90%;
    }
}
`

const Btn = styled.button`
padding: 1rem;
color: #0c0c0c;
width: 12rem;
background-color: #fff;
border: none;
outline: transparent;
border-radius:.5rem;
font-size: 2rem;

&:hover{
    background-color: transparent;
    transition: all 0.5s ease;
}
`

export default Moviedetailrender
