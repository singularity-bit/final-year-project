import React,{useContext} from 'react';
import './Statistics.css';
import {Link} from 'react-router-dom'
import Chart from './Chart'
import UpcomingAppointmentsWidget from './UpcomingAppointments/UpcomingAppointmentsWidget'
import {UserContext} from '../../UserContext'


function Statistics(props) {
    const userType=useContext(UserContext)
    const {nrOfSpecialists,nrOfVisits,nrOfPatients,nrOfAppointments}=props;
    return (
        <div>
            
                
                <div className='is-flex is-justify-content-space-between is-flex-wrap-wrap py-5'>
                    <h4 class="title is-4 has-text-grey-dark">Overview</h4>
                    {userType.user_type==='pacient' | userType.user_type==='admin' ?
                        <Link to='/new-appointment'>
                            <button className="button has-background-success has-text-primary-light has-text-weight-medium  ">New appointment</button>
                        </Link>
                        :
                        <></>
                    }
                </div>
                <div className='columns'>
                    <div className='column is-two-thirds'>
                        <div className="tile is-ancestor ">
                        <div className='tile is-vertical'>
                            <div className='tile'>
                                    <div className="tile is-parent ">
                                        <article className="tile is-child box">
                                        <p className="subtitle has-text-grey-light">Total specialists</p>
                                        <p className="title" >{nrOfSpecialists}</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                        <p className="subtitle has-text-grey-light">Total completed visits</p>
                                        <p className="title">{nrOfVisits}</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                                <div className='is-flex is-justify-content-space-between'>
                                                    <div className=''>
                                                        <p className="subtitle has-text-grey-light">Total patients</p>  
                                                        <p className="title">{nrOfPatients}</p>
                                                    </div>
                                                    <figure className="fas fa-users fa-4x is-hidden-touch"></figure>           
                                                </div>                                                                 
                                        </article>
                                    </div>
                                    
                            </div>
                            <div className='tile'>
                                <div className='tile is-parent '>
                                    <article className='tile is-child box'>
                                        <div className="chart">
                                            <Chart/>
                                        </div>
                                    </article>
                                </div>                          
                            </div>
                            
                        </div>      
                        </div>
                    </div>
                    <div className='column'>
                        <div className='tile is-ancestor '>
                            <div className='tile is-vertical '>
                                <div className='tile'>
                                <div className="tile is-parent">
                                    <UpcomingAppointmentsWidget/>                          
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                
           
        </div>
    )
}

export default Statistics
