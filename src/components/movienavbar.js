import React, { useState } from "react";
import styled from 'styled-components'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { useAuth } from "./authcontext";




export default function Movienavbar() {

  const history =  useHistory()
  const {logout} = useAuth()
  const [error,seterror] = useState('')

  const handlesubmit = async (e) => {
      e.preventDefault()
      try{
         seterror("")
         await logout()
         history.push('/login')
      }catch{
          seterror('failed to log out')
      }
  }


    
    return (
        <Navbar>

            {error && window.alert({error})}

            <div className="imgdiv" onClick={() => history.push('/movies')}>
               <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix" />
            </div>

            <div className="navlinks hidden" >
                <ul>
                  <Link to="/movies" className="link"> <li>Home</li></Link>
                   <Link to="/movies/tvshows" className="link"> <li>Tv Shows</li> </Link>
                   <Link to="/movies/Originals" className="link"> <li>Netflix-originals</li></Link>
                   <Link to="/movies/search" className="link"> <li>Search movies</li></Link>
                </ul>
            </div>

            <div className="btndiv">
             <Link to="/"><Button variant="danger" size="lg" className="p-2" onClick={handlesubmit}>Sign-out</Button></Link>
            </div>
            
        </Navbar>
    )
}

const Navbar = styled.div`
width: 100%;
height: 10vh;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
background-color: transparent;
position: absolute;
z-index:10;

@media(max-width:768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;

    ul{
        justify-content: center;
        flex-wrap: wrap;

        li{
            font-size: 1rem;
        }
    }
}



.link{
    text-decoration: none;
}

.imgdiv{
    padding: .5rem;

    img{
        width:160px;
        height:40px;
        object-fit: cover;
        cursor: pointer;
    }

    /* @media(max-width:768px){
    img{
        width: 140px;
        height: 30px;
        object-fit: cover;

    }
} */
    
}

.navlinks{
    padding:.5rem;
    width: 50rem;

  @media(max-width:768px){

    width: 100%;
    /* overflow: auto; */

    ul{
        justify-content: center;
        flex-wrap: wrap;

        li{
            font-size: 1rem;
        }
    }
}


    ul{
        display:flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;

        li{
            font-size: 1.5rem;
            color: #fff;

        }
    }

    .btndiv{
        padding: .5rem;
        /* margin: auto; */
        width: 40rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

}

`
