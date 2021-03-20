import React,{useState,useEffect,useRef} from 'react'
import SpecialistCard from '../../Components/SpecialistCard/SpecialistCard'
import useComponentVisible from '../../Components/useComponentVisible'

import DropDown from '../../Components/DropDown/DropDown'

function Specialist() {
    const specialistTypes=['oculist','oftalmolog','chirurg','dermatolog'];
    const specialistList=[
        {
            name:'Vasile',
            category: 'oculist',
            rating:3
        },
        {
            name:'Alex',
            category: 'oftalmolog',
            rating:3
        },
        {
            name:'Ion',
            category: 'chirurg',
            rating:3
        },
        {
            name:'Maria',
            category: 'dermatolog',
            rating:3
        }
        ,
        {
            name:'bija',
            category: 'oftalmolog',
            rating:3
        },
        {
            name:'dulghieru',
            category: 'chirurg',
            rating:3
        },
        {
            name:'pusia',
            category: 'dermatolog',
            rating:3
        }
    ]

    const selectedItem=data=> console.log(data);
    
    return (
        <div>
            <h1 className=' has-text-centered-touch title is-4 has-text-grey-dark'>Specialist</h1>

            {/*dropdown */}
                
                <DropDown tags={specialistTypes} selectedTags={selectedItem}/>
                
                <div class="tags my-3">
                    
                    <span class="tag is-warning">
                        Remove all filters
                    <button class="delete is-small" onClick={()=>{
                        
                    }}></button>
                    </span>
                </div> 
                

                {/*specialist cards */}

                <div className='columns is-multiline pt-5'>
                    <SpecialistCard data={specialistList} />
                </div>
        </div>
    )
}

export default Specialist
