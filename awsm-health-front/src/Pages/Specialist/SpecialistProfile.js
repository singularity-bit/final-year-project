import React, { useEffect,useState ,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import './SpecialistProfile.css'
import SpecialistData from '../../Components/Specialist/SpecialistData'
import {UserContext} from '../../UserContext'
import Appointments from '../Appointments/Appointments'
import axios from 'axios'
function SpecialistProfile({match}) {
    const userType=useContext(UserContext)
    const [userData, setuserData] = useState([])
    const [activeTab,setActiveTab]=useState('profile');
    const [enableInput,setEnableInput] = useState(false)
    const [modal, setmodal] = useState(false)
    let redirect=useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:3000/specialists/${match.params.id}`).then(res=>{
            setuserData(res.data); 
            console.log("medici",userData)
        })
        
    },[])
    useEffect(()=>{
        console.log("enable input",enableInput)
    },[enableInput])

    const toggleButtons=(value)=>{
        setEnableInput(value);
    }
    const deleteRequest=()=>{
        axios.delete('http://localhost:3000/delete',{data:{
            id:userData[0].id,
            user_type:userData[0].user_type
        }})
            .then(res=>{
            console.log(res);
            redirect.push('/specialist');
            setmodal(!modal);
        })
    }
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
                                {userData[0]?.nume_medic} {userData[0]?.prenume_medic}              
                            </h1>
                            <h1 className="is-size-4  has-text-link ">
                                {match.params.category}
                            </h1>
                            {userType==='admin' &&
                                <div className="buttons mt-3">
                                <button class="button is-warning" onClick={()=>setEnableInput(!enableInput)}>Modify user data</button>
                                <button class="button is-danger" onClick={()=>setmodal(!modal)} >Delete User</button>
                                </div>
                            }
                            {modal && 
                                <div className="modal is-active">
                                <div className="modal-background"></div>
                                <div className="modal-card">
                                    <section className="modal-card-body">
                                    <p>Are you sure you want to delete { userData[0]?.nume_medic}  { userData[0]?.prenume_medic} </p>
                                    </section>
                                    <footer className="modal-card-foot">
                                    <button className="button is-success"onClick={()=>deleteRequest()}>Delete</button>
                                    <button className="button" onClick={()=>setmodal(!modal)}>Cancel</button>
                                    </footer>
                                </div>
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
                        activeTab=='profile' & userData.length>0  && <SpecialistData userData={userData} enableInput={enableInput} toggler={toggleButtons}/>
                    }
                    {
                        activeTab=='appointments' && <Appointments/>
                    }
                                    
                </div>
            </>
            
        )
    
}

export default SpecialistProfile
