import React,{useRef} from "react";
import styled from "styled-components";
import { smallImage } from "./api";
import { imagepath } from './api';
import { moviedetailaction } from "../actions/moviedetailaction";
import { useDispatch , useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'






function Moviehomerow({movie,title,type}) {

    const dispatch = useDispatch()


    const onclicking = (id) => {
      dispatch(moviedetailaction(id,type))
    }
    

    return (
        <>
        <Title >
            <h1>{title}</h1>
        </Title>
        <Row>
           
               {movie.map((mov,i) => {
                   return <Link to={`/movies/detail/${mov.id}`} key={i}><Image src={`${smallImage}${mov.poster_path}`} alt="" onClick={() => onclicking(mov.id)}/></Link>
               })}
        </Row>
        </>
    )
}

const Row = styled(motion.div)`
width: 100%;
margin-top: 2rem;
margin-bottom: 2rem;
padding: 2rem;
align-items: center;
display: flex;
overflow-y: hidden;

overflow-x: scroll;



&::-webkit-scrollbar{
    display: none;
}

`

const Title = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
margin-left: 2.5rem;
padding: 1rem;
h1{
    font-size:2rem;
    color:#fff;
    font-weight: 300;
}
`

const Image = styled.img`
height: 300px;
object-fit: cover;
padding: 1rem;
cursor: pointer;
-webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

    &:hover{
        transition: all 0.5s ease;
        transform: translateY(-10px);
    }

`


export default Moviehomerow
