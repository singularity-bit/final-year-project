import React, { useEffect,useState ,useContext} from 'react'
import { Redirect } from "react-router-dom";
import axios from 'axios'
import {UserContext} from '../../UserContext'
import Appointments from '../Appointments/Appointments'
import PacientData from './PacientData'
function PacientProfile({match}) {
    const userType=useContext(UserContext)
    const [userData, setuserData] = useState([])
    const [activeTab,setActiveTab]=useState('profile');
    const [enableInput,setEnableInput] = useState(false)
    const [modal, setmodal] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:3000/pacienti/${match.params.id}`).then(res=>{
            setuserData(res.data); 
        })
    },[])

    const numePacient=userData?.map(item=>{
        return <p className="title is-4" key={item.id}>{item.nume_pacient} {item.prenume_pacient}</p>
    })

    const toggleButtons=(value)=>{
        setEnableInput(value);
    }
    const deleteRequest=()=>{
        axios.delete('http://localhost:3000/delete',{data:{id:userData[0].id}})
            .then(res=>{
            console.log(res);
            <Redirect push to="/patients" />
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
                            { numePacient}           
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
                                    <p>Are you sure you want to delete {numePacient}</p>
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
                    activeTab=='profile' & userData.length>0 && <PacientData userData={userData} enableInput={enableInput} toggler={toggleButtons}/>
                }
                {
                    activeTab=='appointments' && <Appointments/>
                }
                                
            </div>
        </>
        
    )
}

export default PacientProfile
