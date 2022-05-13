import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Homepage() {

    const logo = `https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`
    return (
        <Maindiv>
            <Navbar>
                <div className="imgdiv"> 
                    <img src={logo} alt="netflix"/>
                </div>
                <div className="btndiv">
                    <Link to="/signup" style={{textDecoration:"none"}}>
                    <Button variant="danger" size="lg">sign up</Button>
                    </Link>
                </div>
            </Navbar>

           <Maintypo>
               <div className="mainhead">
                   <h1>Unlimited movies, TV</h1>
                   <h1>shows,and more</h1>
               </div>

               <div className="tagline">
                   <h2>Watch anytime, Cancel anytime</h2>
               </div>

               <div className="lorem">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est?</p>
                   <Link to="/signup" style={{textDecoration:"none"}}>
                   <Button variant="danger" size="lg" className="p-3 w-50 d-block m-auto">Get started</Button>
                   </Link>
               </div>

           </Maintypo>

        </Maindiv>
    )
}

const Maindiv = styled(motion.div)`
width: 100%;
min-height: 110vh;
background:linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://bingeflix.in/wp-content/uploads/2021/03/Netflix-Background.jpg');


`

const Navbar = styled.div`
min-height: 10vh;
width: 100%;
padding: 1rem;
background: transparent;
display: flex;
align-items: center;
justify-content: space-between;

.imgdiv{
    padding: .5rem;
    justify-self: flex-start;
    img{
        width: 200px;
        height: 50px;
    }
}

.btndiv{
    padding:.5rem;
    justify-self: flex-end;
}

@media (max-width:540px){
    display: block;
    margin: auto;
    text-align: center;
}

`;

const Maintypo = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
flex-direction: column;

  margin: auto;
  /* width: 50rem; */
  min-height: 75vh;

  .tagline{
      h2{
          font-weight: 300;
          color: #fff;
          font-size: 3rem;

      }
  }

  .mainhead{
      flex-direction: column;
  }

  h1{
      font-size:6rem;
      color:#fff;
      text-align:center;
      font-weight: 600;
  }

  .lorem{
      margin: 1rem auto;
      padding:.5rem;

      p{

          font-size: 1.5rem;
          color: #fff;
          font-weight: 300;
      }


    }

    @media (max-width:540px) {
        h1{
            font-size: 3rem;
        }
        h2{
            font-size: 1.7rem;
            text-align: center;
        }
        p{
            text-align: center;

        }
    }
`

export default Homepage
