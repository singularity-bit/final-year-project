import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import TopNavigation from './Components/TopNavigation/TopNavigation'
import Routes from './Pages/Routes';
import './MainViev.css';

function MainView() {
    return (
        <>
            <div className='columns'>
                <Sidebar/>
                <div className='column m-0 px-6'> 
                    <TopNavigation/>
                    <Routes/>
                </div>
            </div>
        </>
    )
}

export default MainView;