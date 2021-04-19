import React from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const appointments = [
    { title: 'Mail New Leads for Follow Up', startDate: '2021-04-19T10:00' },
    { title: 'Product Meeting', startDate: '2021-04-19T10:30', endDate: '2021-04-19T11:30' },
    { title: 'Send Territory Sales Breakdown', startDate: '2019-06-23T12:35' },
];
function Appointment() {
    
    

    return (
        <>
            <Scheduler data={appointments}>
                <ViewState currentDate={Date.now()}/>
                <WeekView startDayHour={9.5} endDayHour={13.5}/>
                <Appointments/>
            </Scheduler>
            
        </>
    )
}

export default Appointment
