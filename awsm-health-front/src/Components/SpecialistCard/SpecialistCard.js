import React, { useState,useEffect } from 'react'
import './SpecialistCard.css'
function SpecialistCard(props) {

    //hooks
    const [isHovered,setHovered]=useState([]);

    const {data,filter}=props;

    const displaySpecialist=data.filter((item,index)=>{    
        
        return filter.size===0?data:filter.has(item.category)
    })
    
 
    const test=(id)=>{
        //console.log("id:"+id+""+isHovered)
    }

    const specialistList=displaySpecialist.map((item,index)=>{
        const {name,category}=item;
        return(
            <div className='column is-one-quarter'>
                    <div className='block'>
                        <div key={index} className="card"
                            onMouseEnter={()=>{
                                
                            }}
                            onMouseLeave={()=>setHovered(false)}
                            
                        >
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
                            {isHovered &&
                                (
                                    <footer class="card-footer">
                                        <p class="card-footer-item">
                                        <span>
                                            <a href="#">Check profile</a>
                                        </span>
                                        </p>
                                    </footer>
                                )
                            }
                        </div>
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
