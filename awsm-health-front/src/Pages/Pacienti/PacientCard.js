import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
//import './SpecialistCard.css'
import {UserContext} from '../../UserContext'

function PacientCard(props) {
    //hooks
    const {data}=props;

    return (
        <>      
            {data?.map((item,index)=>{
            const {prenume_medic,category}=item;
            return(
                <div className='column is-one-quarter' key={item.Id}>
                        <div className='block'>
                            <Link to={`pacient/${item.id}/${item.prenume_medic}/${item.category}`}>
                                <div  className="card">
                                    <div className="card-content ">
                                        <div className="is-flex-direction-column is-justify-content-center">
                                        <div className="avatar pb-4">
                                            <figure className="image is-rounded is-96x96">
                                            <img className='is-rounded' src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                            </figure>
                                        </div>
                                        <div className="card-details has-text-centered">
                                            <p className="title is-4">{prenume_medic}</p>
                                            <p className="subtitle is-6 has-text-link">{category}</p>
                                        </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Link>
                        </div>
                </div>    
            )
            })
        }
        </>
    )
}

export default PacientCard
