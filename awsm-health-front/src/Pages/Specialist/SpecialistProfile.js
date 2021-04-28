import React, { useEffect,useState ,useContext} from 'react'
import {useLocation} from 'react-router-dom'
import './SpecialistProfile.css'
import SpecialistData from '../../Components/Specialist/SpecialistData'
import {UserContext} from '../../UserContext'
import Appointments from '../Appointments/Appointments'
function SpecialistProfile({match}) {
    const userType=useContext(UserContext)
    const [activeTab,setActiveTab]=useState('profile');

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
                        {userType==='admin' &&
                            <div className="buttons mt-3">
                            <button class="button is-warning">Modify user data</button>
                            <button class="button is-danger">Delete User</button>
                            </div>
                        }
                    </div>
                </div>

                <div className='is-flex is-align-items-center pt-6 pb-3'>      
                    <div className='is-flex sub-menu-tabs '>
                        <a  onClick={()=>setActiveTab('profile')} className={activeTab=='profile'?"px-3 has-text-link has-text-weight-semibold is-pulled-left":"px-3 has-text-grey is-pulled-left"}>Profile info</a>
                        <a  onClick={()=>setActiveTab('appointments')} className={activeTab=='appointments'?"px-3 has-text-link has-text-weight-semibold is-pulled-left":"px-3 has-text-grey is-pulled-left"}>Appointments</a>
                    </div> 
                    {userType!=='medic' &&
                        <div className='is-flex is-justify-content-flex-end is-pulled-right sub-menu-icons'>
                        <a  onClick={()=>setActiveTab('app')} className={activeTab=='app'?"px-3 has-text-link has-text-weight-semibold is-pulled-left":"px-3 has-text-grey is-pulled-left"}> <i className="fas fa-calendar-plus fa-2x "/> </a>
                        </div>
                    }
                    
                        
                    
                </div>

                {
                    activeTab=='profile' && <SpecialistData userData={match.params}/>
                }
                {
                    activeTab=='appointments' && <Appointments/>
                }
                                
            </div>
        </>
        
    )
}

export default SpecialistProfile
