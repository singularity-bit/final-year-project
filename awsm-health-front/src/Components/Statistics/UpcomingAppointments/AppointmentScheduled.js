import React,{useState,useEffect, useRef} from 'react'
import './AppointmentScheduled.css'
function AppointmentScheduled(props) {
    //props
    const {title,description}=props
    
    //hooks
    //hook for header pressed
    const [isOpen,setOpen]=useState(false);

    //hook to change arrow icon when pressed
    const [isActive,setActive]=useState('');

    //verify if card content it's collapsed
    const collapse=()=>{
        const isSelected=isOpen===true;
        console.log(`is ${isSelected}`)
        return isSelected
        
    }  

    const subMenu=(description)=>{
        
        return (
            <>
                <ul>
                    <li>
                    <p class="menu-label">
                        {description}
                    </p>
                        
                    </li>
                </ul>
                
                
            </>   
        )
    }

    return (
        <a className='panel-block px-0'>
            <li>
                <a className={isOpen?isActive:''}
                    onClick={()=>{
                        setOpen(!isOpen);
                        setActive('is-active');
                        collapse()}
                    }
                >
                    {title}
                </a>
                {
                    collapse()&&subMenu(description)
                }

            </li>
        </a>
        
        
        
            
            
    )
}

export default AppointmentScheduled


