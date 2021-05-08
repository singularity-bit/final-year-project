import axios from 'axios'
import React,{useState,useEffect,useContext} from 'react'
import AppointmentScheduled from './AppointmentScheduled'
import {UserContext} from '../../../UserContext'
import './UpcomingAppointmentsWidget.css'

function UpcomingAppointmentsWidget() {
    const userType=useContext(UserContext)

    const [appointments,setAppointments]=useState('');
    const [changedAppointments, setstChangedAppointmentsate] = useState('')
    
    
   //shows only active app
useEffect(()=>{
    console.log("user id",userType.id)
    userType?.id && axios.post('http://localhost:3000/upcoming-appoinments',{
        id:userType.id
    }).then(res=> setAppointments(res.data));
    
},[])

useEffect(()=>{
    userType?.id && axios.post('http://localhost:3000/upcoming-appoinments',{
        id:userType.id
    }).then(res=> setAppointments(res.data));
    
},[changedAppointments])       

    return (
        <div className='container'>
            <nav className="panel is-info  mx-0">
                <p className="panel-heading">
                    Upcoming Appointments
                </p>
                
                <AppointmentScheduled data={appointments} result={setstChangedAppointmentsate}/>
                
                
            </nav>
        </div>
        
    )
}

export default UpcomingAppointmentsWidget
