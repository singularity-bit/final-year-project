import React from 'react'
import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,EventSettingsModel} from '@syncfusion/ej2-react-schedule'


function Appointments() {
    
    const  localData=[{
            Subject: 'Licenta',
            StartTime:new Date(2021,3,5,15,0),
            EndTime:new Date(2021,3,5,14,40)
            
        }]
    

    return (
        <ScheduleComponent currentView='Month' eventSettings={{dataSource:localData}}>
            <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
        </ScheduleComponent>
    )
}

export default Appointments
