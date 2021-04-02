
import 'bulma/css/bulma.css';
import './App.css';
import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Login from './Pages/Signin/Login/Login';
import Register from './Pages/Signin/Register/Register';
import MainView from './MainView';



function App() {

  const [route,setRoute]=useState('login');
  const [isSignedIn,setSignedIn]=useState(false);
  const [userType,setUserType]=useState();

  const onRouteChange=(argument)=>{
    if(argument==='signout'){
      
      setSignedIn(false)
    }else if(argument==='home'){
      setSignedIn(true);
    }
    setRoute(argument);
  }
  
    return (
      <div className="App">
        {
          route==='home'
          ?
            <MainView onRouteChange={(argument)=>onRouteChange(argument)}/>

          :(
            route==='register'
            ?
            <Register onRouteChange={(argument)=>onRouteChange(argument)}/>
            :
            <Login onRouteChange={(argument)=>onRouteChange(argument)} userType={userType}/>
          )
          
        }
        
      </div>
    ); 
}

export default App;
