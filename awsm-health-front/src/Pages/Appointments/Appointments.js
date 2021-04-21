import React from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

const appointments = [
    { title: 'Mail New Leads for Follow Up', startDate: '2021-04-19T10:00' },
    { title: 'Product Meeting', startDate: '2021-04-19T10:30', endDate: '2021-04-19T11:30' },
    { title: 'Send Territory Sales Breakdown', startDate: '2019-06-23T12:35' },
];
const scheduleList=[{
    Id:0,
    title: 'Oculist',
    Name: 'Vasile',
    startDate:new Date(2021,3,5,16,0),
    endDate:new Date(2021,3,5,16,40),
    Status:'active'
},
{
    Id:1,
    title: 'Oftalmolog',
    Name: 'Alex',
    startDate:new Date(2021,3,6,15,0),
    endDate:new Date(2021,3,6,14,40) ,
    Status:'active'  
},
{
    Id:2,
    title: 'Oculist',
    Name: 'Vasile',
    startDate:new Date(2021,4,5,16,0),
    endDate:new Date(2021,4,6,16,40),
    Status:'active'   
},
{
    Id:3,
    title: 'Oftalmolog',
    Name: 'Alex',
    startDate:new Date(2021,3,7,15,0),
    endDate:new Date(2021,3,7,14,40),
    Status:'active'   
},
{
    Id:4,
    title: 'Oftalmolog',
    Name:'bija',
    startDate:new Date(2021,4,5,16,0),
    endDate:new Date(2021,4,6,16,40),
    Status:'active'   
}
]
function Appointment() {

    return (
        <>
            <Scheduler data={scheduleList}>
                <ViewState defaulturrentDate={Date.now()}/>
                <MonthView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
            </Scheduler>
            
        </>
    )
}

export default Appointment
