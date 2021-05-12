import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';

//components
import Home from './Home/Home'
import Appointment from './Appointments/Appointments'
import Messages from './Messages/Messages'
import Pacienti from './Pacienti/Pacienti'
import PacientProfile from './Pacienti/PacientProfile'
import Specialist from './Specialist/Specialist'
import NewAppointment from './NewAppointment/NewAppointment'
import Login from './Signin/Login/Login'
import SpecialistProfile from './Specialist/SpecialistProfile'
import Register from './Signin/Register/Register'
import {UserContext} from '../UserContext'
import {CategoryContext,SpecialistContext} from './Specialist/CategoryContext'
import axios from 'axios'

const  Routes=({userType})=>{
    return (
            <Switch>
                <UserContext.Provider value={userType}>
                        <Route exact path='/' render={(props)=>(
                            <Home {...props}/>
                        )}/>
                        <Route  path='/appointments' render={(props)=>(
                            <Messages {...props}/>
                        )} component={Appointment}/>
                        <Route  path='/patients' render={(props)=>(
                            <Pacienti {...props}/>
                        )}/>
                        <Route  path='/specialist' render={(props)=>(
                            <Specialist {...props}/>
                        )}/>

                        <Route  path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>

                        <Route path='/new-appointment' component={NewAppointment}/>
                        
                        <Route path='/medic/:id'  component={SpecialistProfile}/>
                        <Route path='/pacient/:id'  component={PacientProfile}/>
                </UserContext.Provider>
                    
                
            </Switch>
        
    )
}

export default Routes

