import * as React from 'react';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentForm,
    Toolbar,
    DateNavigator,
    AppointmentTooltip,
    ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
const scheduleList=[{
    Id:0,
    title: 'Oculist',
    Name: 'Vasile',
    startDate:new Date(2021,4,5,16,0),
    endDate:new Date(2021,4,5,16,40),
    Status:'active'
},
{
    Id:1,
    title: 'Oftalmolog',
    Name: 'Alex',
    startDate:new Date(2021,4,6,15,0),
    endDate:new Date(2021,4,6,14,40) ,
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
    startDate:new Date(2021,4,7,15,0),
    endDate:new Date(2021,4,7,14,40),
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

export default class SelectDate extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        data: scheduleList,
        currentDate: Date.now()
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    commitChanges({ added}) {
        this.setState((state) => {
        let { data } = state;
        if (added) {
            const startingAddedId = data.length > 0 ? data[data.length - 1].Id + 1 : 0;
            data = [...data, { Id: startingAddedId, ...added }];
        }
        
        return { data };
        });
    }

    render() {
        const { currentDate, data } = this.state;

        return (
        
            <Scheduler
            data={data}
            
            >
            <ViewState
                defaultCurrentDate={currentDate}
            />
            <EditingState
                onCommitChanges={this.commitChanges}
            />
            <IntegratedEditing />

            <WeekView
                startDayHour={9}
                endDayHour={17}
            />
            <Toolbar />
            <DateNavigator />
            <Appointments />
            <ConfirmationDialog
                ignoreCancel
            />
            <AppointmentTooltip
                showOpenButton
                showDeleteButton
            />
            <AppointmentForm />
            
            </Scheduler>
        
        );
    }
    }
