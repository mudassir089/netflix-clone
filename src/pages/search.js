import React,{useState} from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import {motion} from 'framer-motion'
import {useDispatch,useSelector} from 'react-redux'
import { Searchaction } from "../actions/searchaction";
import { LoadingImage } from "../components/netflixoriginals";
import Moviehomerow from "../components/moviehomerow";
import { Home } from "../components/moviehomescreen";


function Search() {
    
    const [textinput,settextinput] = useState()
    const dispatch = useDispatch()
    const {isLoading,searched} = useSelector(state => state.search)

    const changevalue = (e) => {
        const mainvalue = e.target.value
        settextinput(mainvalue.toLowerCase().replaceAll(' ', '+'))
    }

    const submitsearch = (e) => {
        e.preventDefault()
        dispatch(Searchaction(textinput))
    }

    return (
        
        <>
     <Home>
            <Formdiv>
            <form onSubmit={submitsearch}>
            
            <input type="text" onChange={changevalue}/>
            <Button variant="danger" size="lg" className="ml-2 p-2">Seearch</Button>
            </form>
            </Formdiv>
        <Resultsdiv>

        {isLoading && (
            <LoadingImage ><img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" /></LoadingImage>
        )}

        {!isLoading && (
            <Moviehomerow movie={searched} title={'Search results'}  type={'movie' ? 'movie' : "tv"} />
            
        )}

        </Resultsdiv>
     </Home>
        </>
    )
}

const Formdiv = styled(motion.div)`
padding: 1rem;
width: 100%;
min-height: 5rem;
margin:.3rem .5rem;
position: absolute;
top: 10%;
margin: auto;
display: flex;
justify-content: space-between;
flex-direction: column;
text-align: center;

@media(max-width:768px){
    top: 20%;
}


input{
    padding: 1rem;
    width: 80%;
margin:auto;
font-size: 1.5rem;
color:#161616;
background-color: #fff;
border:1px solid #161616;
outline:transparent;
border-radius:.5rem;
    
}



`

export const Resultsdiv = styled(motion.div)`
min-height: 70vh;
width: 100%;
/* display: grid; */
position: absolute;
top: 20%;
/* grid-template-columns: repeat(auto-fit,minmax(300px,1fr)); */
/* gap:.6rem; */
/* margin: auto; */
/* text-align: center; */
padding: 1rem;


`;



export default Search


