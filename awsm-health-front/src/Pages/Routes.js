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

const specialistTypes=['oculist','oftalmolog','chirurg','dermatolog'];
const specialistList=[
    {
        id:0,
        name:'Vasile',
        category: 'oculist',
        rating:3,
        service:[{
            serviceName:"consult1",
            servicePrice:50+" lei",
        },
        {
            serviceName:"consult2",
            servicePrice:50+" lei"
        },
        {
            serviceName:"consult3",
            servicePrice:50+" lei"
        }
        ],   
    
    },
    {
        id:1,
        name:'Alex',
        category: 'oftalmolog',
        rating:3,
        service:[{
            serviceName:"consult1",
            servicePrice:50+" lei",
        },
        {
            serviceName:"consult2",
            servicePrice:50+" lei"
        },
        {
            serviceName:"consult3",
            servicePrice:50+" lei"
        }
        ]},
    {
        id:2,
        name:'Ion',
        category: 'chirurg',
        rating:3,
        service:[{
            serviceName:"consult1",
            servicePrice:50+" lei",
        },
        {
            serviceName:"consult2",
            servicePrice:50+" lei"
        },
        {
            serviceName:"consult3",
            servicePrice:50+" lei"
        }
        ]},   
    {
        id:3,
        name:'Maria',
        category: 'dermatolog',
        rating:3,
        service:[{
            serviceName:"consult1",
            servicePrice:50+" lei",
        },
        {
            serviceName:"consult2",
            servicePrice:50+" lei"
        },
        {
            serviceName:"consult3",
            servicePrice:50+" lei"
        }
        ]}
    ,
    {
        id:4,
        name:'bija',
        category: 'oftalmolog',
        rating:3,
        service:[{
            serviceName:"consult1",
            servicePrice:50+" lei",
        },
        {
            serviceName:"consult2",
            servicePrice:50+" lei"
        },
        {
            serviceName:"consult3",
            servicePrice:50+" lei"
        }
        ]},
    {
        id:5,
        name:'dulghieru',
        category: 'chirurg',
        rating:3,
        service:[{
            serviceName:"consult1",
            servicePrice:50+" lei",
        },
        {
            serviceName:"consult2",
            servicePrice:50+" lei"
        },
        {
            serviceName:"consult3",
            servicePrice:50+" lei"
        }
        ]},
    {
        id:6,
        name:'pusia',
        category: 'dermatolog',
        rating:3,
        service:[{
            serviceName:"consult1",
            servicePrice:50+" lei",
        },
        {
            serviceName:"consult2",
            servicePrice:50+" lei"
        },
        {
            serviceName:"consult3",
            servicePrice:50+" lei"
        }
        ]}
]

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
                        <CategoryContext.Provider value={specialistTypes}>
                            <SpecialistContext.Provider value={specialistList}>
                            <Route path='/new-appointment' component={NewAppointment}/>
                            </SpecialistContext.Provider>
                        
                        </CategoryContext.Provider>
                        
                        <Route path='/profile/:id/:name/:category'  component={SpecialistProfile}/>
                        <Route path='/pacient/:id/:name/'  component={PacientProfile}/>
                </UserContext.Provider>
                    
                
            </Switch>
        
    )
}

export default Routes

