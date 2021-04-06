import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';

//components
import Home from './Home/Home'
import Appointments from './Appointments/Appointments'
import Messages from './Messages/Messages'
import Pacienti from './Pacienti/Pacienti'
import Specialist from './Specialist/Specialist'
import NewAppointment from './NewAppointment/NewAppointment'
import Login from './Signin/Login/Login'
import SpecialistProfile from './Specialist/SpecialistProfile'
import Register from './Signin/Register/Register'

const  Routes=({userType})=>{
    return (
            <Switch>
                <Route exact path='/' render={(props)=>(
                    <Home {...props} userType={userType}/>
                )}/>
                <Route  path='/appointments' render={(props)=>(
                    <Messages {...props} userType={userType}/>
                )} component={Appointments}/>
                <Route  path='/patients' render={(props)=>(
                    <Pacienti {...props} userType={userType}/>
                )}/>
                <Route  path='/specialist' render={(props)=>(
                    <Specialist {...props} userType={userType}/>
                )}/>

                <Route  path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/new-appointment' component={NewAppointment}/>
                <Route path='/profile/:id/:name/:category'  component={SpecialistProfile}/>
            </Switch>
        
    )
}

export default Routes

