
import 'bulma/css/bulma.css';
import './App.css';
import React, {useState,useEffect,useContext} from 'react';

import Login from './Pages/Signin/Login/Login';
import Register from './Pages/Signin/Register/Register';
import MainView from './MainView';
import {Redirect, Route } from 'react-router';




function App() {

  const [route,setRoute]=useState('login');
  const [isSignedIn,setSignedIn]=useState(false);
  const [userType,setUserType]=useState('');

  const onRouteChange=(argument)=>{
    setRoute(argument);
  }

  const onChangeUser=(argument)=>{
    
    setUserType(argument)
    
  }
  useEffect(()=>{
    <Redirect to="/"/>
  },[isSignedIn])
    return (
      <div className="App">
        {
          route==='/' 
          ?
              <MainView onRouteChange={(argument)=>onRouteChange(argument)} userType={userType}/>
            

          :(
            route==='register'
            ?
            <Register onRouteChange={(argument)=>onRouteChange(argument)}/>
            :
            <Login onRouteChange={(argument)=>onRouteChange(argument)} userType={(argument)=>setUserType(argument)} isAuth={setSignedIn}/>
          )
          
        }
        
      </div>
    ); 
}

export default App;
