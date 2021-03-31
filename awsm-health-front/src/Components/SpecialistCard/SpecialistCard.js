import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './SpecialistCard.css'
function SpecialistCard(props) {

    //hooks


    const {data,filter}=props;

    const displaySpecialist=data.filter((item,index)=>{    
        
        return filter.size===0?data:filter.has(item.category)
    })
    


    const specialistList=displaySpecialist.map((item,index)=>{
        const {name,category}=item;
        return(
            <div className='column is-one-quarter' key={index}>
                    <div className='block'>
                        <Link to={`profile/${item.id}/${item.name}/${item.category}`}>
                            <div  className="card">
                                <div className="card-content ">
                                    <div className="is-flex-direction-column is-justify-content-center">
                                    <div className="avatar pb-4">
                                        <figure className="image is-rounded is-96x96">
                                        <img className='is-rounded' src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="card-details has-text-centered">
                                        <p className="title is-4">{name}</p>
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


    return (
        <>      
            
            {specialistList}
        </>
    )
}

export default SpecialistCard
