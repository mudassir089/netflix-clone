import React,{createContext,useContext,useState,useEffect} from "react";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from '@firebase/auth'

const Authcontext = createContext()

export function useAuth () {
    return useContext(Authcontext)
}


export const AuthProvider = ({children}) => {

    const [currentuser,setcurrentuser] = useState()
    const [loading,setloading] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setcurrentuser(user)
        })
        return unsubscribe
    },[])

    function Signup(email,password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function Login(email,password) {
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth)
    }

    function resetpassword (email) {
      return sendPasswordResetEmail(auth,email)
    }

    const value = {
       currentuser,
       Signup,
       Login,
       logout,
       resetpassword
    }

    return (
        <Authcontext.Provider value={value}>
          {!loading && children}
        </Authcontext.Provider>
    )
}