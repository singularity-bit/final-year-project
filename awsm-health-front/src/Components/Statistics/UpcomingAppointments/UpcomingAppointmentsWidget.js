import axios from 'axios'
import React,{useState,useEffect} from 'react'
import AppointmentScheduled from './AppointmentScheduled'

import './UpcomingAppointmentsWidget.css'

function UpcomingAppointmentsWidget() {

    const [appointments,setAppointments]=useState('');
    const [changedAppointments, setstChangedAppointmentsate] = useState('')
    
   //shows only active app
useEffect(()=>{
    axios.get('http://localhost:3000/upcoming-appoinments').then(res=> setAppointments(res.data));
    
},[])

useEffect(()=>{
    axios.get('http://localhost:3000/upcoming-appoinments').then(res=> setAppointments(res.data));
    
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
