import React,{useState,useEffect, useRef} from 'react'
import './AppointmentScheduled.css'
function AppointmentScheduled(props) {
    //props
    const {title,description}=props
    
    //hooks
    //hook for header pressed
    const [isOpen,setOpen]=useState(false);

    //hook to change arrow icon when pressed
    const [isFlipped,setFlipped]=useState('fas fa-angle-down');

    //verify if card content it's collapsed
    const collapse=()=>{
        const isSelected=isOpen===true;
        console.log(`is ${isSelected}`)
        return isSelected
        
    }  

    const cardBody=(description)=>{
        
        return (
            <>
                <div className='card-body'>
                    <div className="card-content ">
                        <div className="content">
                        {description}
                        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                        <br></br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" className="card-footer-item">Save</a>
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                </div>
                
            </>   
        )
    }

    return (
        <div className="card mb-3 is-shadowless">
                <header className={isOpen?"card-header":"card-header has-background-white-bis"}
                    onClick={()=>{
                        setOpen(!isOpen);
                        setFlipped('fas fa-angle-down fa-flip-vertical');
                        collapse()}
                    }
                >
                    <p className="card-header-title">
                    {title}
                    </p>
                    <div className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className={isOpen?isFlipped:'fas fa-angle-down'} aria-hidden="true"></i>
                    </span>
                    </div>
                </header>
                {
                collapse() && cardBody() 
            }
            </div>
            
            
    )
}

export default AppointmentScheduled
