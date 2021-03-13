import React,{useState} from 'react'
import AppointmentScheduled from './AppointmentScheduled'
import './UpcomingAppointmentsWidget.css'

const appointmentList=[
    {
        title:'Oculist',
        desciption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
    },
    {
        title:'Oftalmolog',
        desciption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
    },
    {
        title:'Oculist',
        desciption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
    },
    {
        title:'Oftalmolog',
        desciption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.'
    }
    
]
const appointments=appointmentList.map((item,index)=>{
    return (
        <AppointmentScheduled key={index} title={item.title} description={item.desciption}/>
    )
})

function UpcomingAppointmentsWidget() {
 
    return (
        <div className='container'>
            <nav className="panel is-info  mx-0">
                <p className="panel-heading">
                    Upcoming Appointments
                </p>
                <div className='content mt-5'>
                    <a className="">
                        {appointments}
                    </a>
                </div>
            
            
            </nav>
        </div>
        
    )
}

export default UpcomingAppointmentsWidget
