import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import TopNavigation from './Components/TopNavigation/TopNavigation'
import Routes from './Pages/Routes';
import './MainViev.css';

function MainView(props) {
    const {userType}=props;
    useEffect (()=>{
        console.log("from main ",userType)
    },[])
    return (
        <>
        <div className="columns">            
                <aside className="pr-0 column is-narrow menu sidebar">
                    <Sidebar/>
                </aside>       
            <div className="column">
            
                    <TopNavigation/>
                    <Routes userType={userType}/>
            
            </div>
                

        </div>
        </>
    )
}

export default MainView;