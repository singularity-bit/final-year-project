import React,{useState,useEffect, useRef} from 'react'
import './AppointmentScheduled.css'
function AppointmentScheduled(props) {
    //props
    const {title,date,specialist,status,onchangeStatus}=props
    
    const options = { month: 'long', day: 'numeric' };
    const optionsHour={hour:'numeric',minute: 'numeric'}
    const startDate= date[0].toLocaleDateString(undefined, options);
    const endDate= date[1].toLocaleDateString(undefined, options)
    const startTime=date[0].toLocaleTimeString(undefined, optionsHour)
    
    //hooks
    //hook for header pressed
    const [isOpen,setOpen]=useState(false);

    //hook to change arrow icon when pressed
    const [isActive,setActive]=useState('');

    const [appointmentStatus, setappointmentStatus] = useState(status);
    //verify if card content it's collapsed
    const collapse=()=>{
        const isSelected=isOpen===true;
        return isSelected
        
    }  

    const changeStatus=(type)=>{
        if (type==='canceled'){
            setappointmentStatus(type);
        }else if (type==='finished'){
            setappointmentStatus(type);
        }
    }
useEffect(()=>{
    onchangeStatus(appointmentStatus);
},[appointmentStatus])

    const subMenu=()=>{
        
        return (
            <>
                <ul>
                    <li className="my-4 ">
                        <div className="is-flex is-flex-direction-row is-align-content-stretch ">
                            <p className="menu-label is-size-4 has-text-weight-bold has-text-grey-darker pr-3">
                                {startTime}
                            </p>
                            <div className="is-flex is-flex-direction-column pl-4 mb-5">
                                <p className="is-size-6 has-text-weight-normal has-text-grey-light">{title}</p>
                                <p className="is-size-6 has-text-weight-bold has-text-grey-darker">{specialist}</p>
                            </div>
                            <div className="container">
                                <a className="is-pulled-right pl-5 has-text-danger" onClick={()=>changeStatus('canceled')}><i class="far fa-calendar-times fa-2x "></i></a>
                                <a className="is-pulled-right pr-5 has-text-success" onClick={()=>changeStatus('finished')}><i class="fas fa-check fa-2x"></i></a>                               
                            </div>
                            
                        </div>
                    </li>
                </ul>   
            </>   
        
        )
    }

    return (
        <a className='panel-block px-5'>
            <li>
                <a className={isOpen?isActive:''}
                    onClick={()=>{
                        setOpen(!isOpen);
                        setActive('is-active');
                        collapse()}
                    }
                >
                    <h1 className="has-text-weight-semibold has-text-grey-light is-capitalized">{startDate}</h1>
                    
                </a>
                {
                    collapse()&&subMenu()
                }

            </li>
        </a>
        
        
        
            
            
    )
}

export default AppointmentScheduled


