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

const  Routes=()=>{
    return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route  path='/appointments' component={Appointments}/>
                <Route  path='/messages' component={Messages}/>
                <Route  path='/patients' component={Pacienti}/>
                <Route  path='/specialist' component={Specialist}/>
                <Route  path='/login' component={Login}/>
                <Route path='/new-appointment' component={NewAppointment}/>
            </Switch>
        
    )
}

export default Routes

