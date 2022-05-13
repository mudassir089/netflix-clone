import React,{useEffect} from "react";
import "firebase/auth"
import { Globalstyles } from "./globalstyles";
import Homepage from "./components/homepage";
import Signup from "./components/signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch} from 'react-router-dom'
import { AuthProvider } from "./components/authcontext";
import Netflix from "./components/netflixhome";
import Login from "./components/login";
import Privateroute from "./components/Privateroute";
import Resetpassword from "./components/resetpassword";

function App() {

 
  return (

   

    <AuthProvider>
    <div className="App">
      
      <Globalstyles/>
      <Switch>
        <Route path="/" exact>
      <Homepage/>
      
      </Route>
      <Route path="/signup">
      <Signup/>
      </Route>
      <Route path="/login" >
      <Login/>
      </Route>
      <Route path="/resetpassword" >
      <Resetpassword/>
      </Route>
      <Privateroute path="/movies" component={Netflix}>
      </Privateroute>
      </Switch>
    </div>
  </AuthProvider>  
  );
}

export default App;
