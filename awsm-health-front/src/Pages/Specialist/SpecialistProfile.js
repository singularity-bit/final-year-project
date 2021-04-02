import React, { useEffect,useState } from 'react'
import {useLocation} from 'react-router-dom'
import './SpecialistProfile.css'
import SpecialistData from '../../Components/Specialist/SpecialistData'
function SpecialistProfile({match}) {

    const [activeTab,setActiveTab]=useState('profile');

    useEffect(()=>{

    },[])
    return (
        
        <>
            <div className="p-6 py-6">
                <div className="is-flex">
                    <div >
                        <figure className="image is-128x128">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                    </div>
                    <div className="px-4">
                        <h1 className="is-size-2  has-text-black">
                            {match.params.name}              
                        </h1>
                        <h1 className="is-size-4  has-text-link ">
                            {match.params.category}
                        </h1>
                    </div>
                </div>

                <div className='is-flex is-align-items-center pt-6 pb-3'>      
                    <div className='is-flex sub-menu-tabs '>
                        <a  onClick={()=>setActiveTab('profile')} className={activeTab=='profile'?"px-3 has-text-link has-text-weight-semibold is-pulled-left":"px-3 has-text-grey is-pulled-left"}>Profile info</a>
                        <a  onClick={()=>setActiveTab('appointments')} className={activeTab=='appointments'?"px-3 has-text-link has-text-weight-semibold is-pulled-left":"px-3 has-text-grey is-pulled-left"}>Appointments</a>
                    </div> 
                    <div className='is-flex is-justify-content-flex-end is-pulled-right sub-menu-icons'>
                        <a className={"px-3 has-text-grey is-pulled-right"} onClick={()=>setActiveTab('call')}> <i className="fas fa-phone-square-alt fa-2x "/></a>
                        <a className={"px-3 has-text-grey is-pulled-right "} onClick={()=>setActiveTab('message')}><i className="fas fa-comment-alt fa-2x"/></a>
                    </div>
                        
                    
                </div>

                {
                    activeTab=='profile' && <SpecialistData userData={match.params}/>
                }
                                
            </div>
        </>
        
    )
}

export default SpecialistProfile
