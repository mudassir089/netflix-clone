import React,{useRef,useState} from 'react'
import { Button,Alert,Card } from 'react-bootstrap'
import { useAuth } from './authcontext'
import { useHistory,Link } from 'react-router-dom'
import {Maindiv,Input} from './signup'


const Resetpassword = () => {

    const userRef = useRef()
    const {resetpassword,curretuser} = useAuth()
    const [error,seterror] = useState('')
    const [loading,setloading] = useState(false)
    const [message,setmessage] = useState('')
    const history = useHistory()

    const handlesubmit = async (e) => {
       e.preventDefault()
       try{
           seterror("")
           setmessage('')
           setloading(true)
           await resetpassword(userRef.current.value)
           setmessage('check your inbox for email')
       }catch{
           seterror("failed to sent email")
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

            <h1>Reset Password</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form onSubmit={handlesubmit}>
            <Input type="text" placeholder="useremail" ref={userRef}></Input>
            <Button variant="danger" size="lg" className="mt-3 p-3 w-50" type="submit" disabled={loading}>Sent Email</Button>
            </form>

           <Link to="/login"> <Button variant="danger" size="lg" className="mt-3 p-3 w-50" >Cancel</Button> </Link>



  
  </Card.Body>
        </Card>
        </Maindiv>
        
    )
}

export default Resetpassword