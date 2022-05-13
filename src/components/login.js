import React,{useRef,useState} from 'react'
import {Card} from 'react-bootstrap'
import { Button,Alert } from 'react-bootstrap'
import { useAuth } from './authcontext'
import { useHistory,Link } from 'react-router-dom'
import {Maindiv,Input} from './signup'


const Login = () => {

    const userRef = useRef()
    const passwordRef = useRef()
    const {Login} = useAuth()
    const [error,seterror] = useState('')
    const [loading,setloading] = useState(false)
    const history = useHistory()

    const handlesubmit = async (e) => {
       e.preventDefault()

       try{
           seterror("")
           setloading(true)
           await Login(userRef.current.value,passwordRef.current.value)
           history.push('/movies')

       }catch{
           seterror("Login failed please try later")
       }
       setloading(false)

    }

    

    return(
        <Maindiv>
            <div className="imgdiv">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix" />
            </div>
        <Card style={{width:'30rem',padding:'1.5rem',background:"#161616"}}>
        <Card.Body>

            <h1>Sign Up</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handlesubmit}>
            <Input type="text" placeholder="useremail" ref={userRef}></Input>
            <Input type="password" placeholder="password" ref={passwordRef}></Input>
            <Button variant="danger" size="lg" className="mt-3 p-3 w-50" type="submit" disabled={loading}>Log in</Button>
            </form>

            <Link to="/resetpassword"><Button variant="outline-danger" size="lg" className="mt-3 p-3 w-50">forgot Password</Button></Link>
            <h3 style={{color:"#fff"}}>Create an account</h3><Link to="/signup"><h3>Sign up</h3></Link>


  
  </Card.Body>
        </Card>
        </Maindiv>
        
    )
}

export default Login