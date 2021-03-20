import React from 'react'
import './SpecialistCard.css'
function SpecialistCard(props) {

    const {data,filter}=props;
    //console.log(data)
    const displaySpecialist=data.filter((item,index)=>{    
        console.log(filter);
        return filter==='all'?data:item.category==filter 
    })
    


    const specialistList=displaySpecialist.map((item,index)=>{
        const {name,category}=item;
        return(
            <div className='column is-one-quarter'>
                    <div className='block'>
                        <div key={index} className="card">
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
            </div>
            </div>
            
            
        )
    })


    return (
        <>      
            <div class="tags">
                    <span class="tag">One</span>
                    <span class="tag">Two</span>
                    <span class="tag">Three</span>
                    <span class="tag is-warning">
                        Remove all filters
                    <button class="delete is-small"></button>
                    </span>
            </div> 
            {specialistList}
        </>
    )
}

export default SpecialistCard
