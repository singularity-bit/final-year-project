import React,{useState,useEffect} from 'react'
import AppointmentScheduled from './AppointmentScheduled'
import { ScheduleComponent, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { Internationalization, extend } from '@syncfusion/ej2-base';
import './UpcomingAppointmentsWidget.css'


const scheduleList=[{
        Id:0,
        Subject: 'Oculist',
        Name: 'Vasile',
        StartTime:new Date(2021,3,5,16,0),
        EndTime:new Date(2021,3,5,16,40),
        Status:'active'
    },
    {
        Id:1,
        Subject: 'Oftalmolog',
        Name: 'Alex',
        StartTime:new Date(2021,3,6,15,0),
        EndTime:new Date(2021,3,6,14,40) ,
        Status:'active'  
    },
    {
        Id:2,
        Subject: 'Oculist',
        Name: 'Vasile',
        StartTime:new Date(2021,6,5,16,0),
        EndTime:new Date(2021,3,6,16,40),
        Status:'active'   
    },
    {
        Id:3,
        Subject: 'Oftalmolog',
        Name: 'Alex',
        StartTime:new Date(2021,3,7,15,0),
        EndTime:new Date(2021,3,7,14,40),
        Status:'active'   
    },
    {
        Id:4,
        Subject: 'Oftalmolog',
        Name:'bija',
        StartTime:new Date(2021,6,5,16,0),
        EndTime:new Date(2021,3,6,16,40),
        Status:'active'   
    }
]



function UpcomingAppointmentsWidget() {

    const [status, setstatus] = useState(scheduleList)
    //const [listFiltered, setListFiltered] = useState(scheduleList)

    const filterAppointments =()=>{
        return(
            status.filter(item=>item.Status==='active').map((item,index)=>{
                const changeStatus=(value)=>{
        
                    let listCopy=[...status];
                    let IndexCopy={
                        ...listCopy[index],
                        Status:value
                    }
                    listCopy[index]=IndexCopy;
                    
                    setstatus(listCopy)
                    
                }                     
                return (
                    <AppointmentScheduled key={item.Id} title={item.Subject} specialist={item.Name} date={[item.StartTime,item.EndTime]} status={changeStatus}/>
                )
            })
        )
    }
        

    useEffect(()=>{
        console.log(status.filter(item=>item.Status==='active')) 
        filterAppointments()
        
        
    },[status])
    return (
        <div className='container'>
            <nav className="panel is-info  mx-0">
                <p className="panel-heading">
                    Upcoming Appointments
                </p>
                {filterAppointments()}
            </nav>
        </div>
        
    )
}

export default UpcomingAppointmentsWidget
