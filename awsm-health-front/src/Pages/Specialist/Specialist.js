import React,{useState,useEffect,useRef} from 'react'
import SpecialistCard from '../../Components/SpecialistCard/SpecialistCard'
import useComponentVisible from '../../Components/useComponentVisible'
import DropDown from '../../Components/DropDown/DropDown'

//const activeTags=new Set();
function Specialist() {
    const specialistTypes=['oculist','oftalmolog','chirurg','dermatolog'];
    
    const specialistList=[
        {
            id:0,
            name:'Vasile',
            category: 'oculist',
            rating:3
        },
        {
            id:1,
            name:'Alex',
            category: 'oftalmolog',
            rating:3
        },
        {
            id:2,
            name:'Ion',
            category: 'chirurg',
            rating:3
        },
        {
            id:3,
            name:'Maria',
            category: 'dermatolog',
            rating:3
        }
        ,
        {
            id:4,
            name:'bija',
            category: 'oftalmolog',
            rating:3
        },
        {
            id:5,
            name:'dulghieru',
            category: 'chirurg',
            rating:3
        },
        {
            id:6,
            name:'pusia',
            category: 'dermatolog',
            rating:3
        }
    ]

    //hooks for filtering
    const [listOfFilters,setListOfFilters]=useState(new Set());

    const filterItems=data=> {  
        setListOfFilters(new Set([...listOfFilters,data]));
    }

    //on page load display all specialist
    useEffect(()=>{
        removeAllFilters();
        [...specialistList].forEach(obj=>obj.isHovered=false)
        //console.log(JSON.stringify(specialistListExpanded))
        
    },[])

    const displayTags=Array.from(listOfFilters).map((item,index)=>{
        return(
            item!==undefined && 
            <span key={index} className="tag">
                {item}
            <button className="delete is-small" onClick={()=>{
                removeCurrentFilter(item)
            }}></button>
            </span>
        )
    })

    const removeAllFilters=()=>{
        setListOfFilters(new Set());
    }
    const removeCurrentFilter=(item)=>{
        setListOfFilters(prev=>new Set([...prev].filter(x=>x!==item)));
    }
    return (
        <div className="container is-fluid">
            <h1 className=' has-text-centered-touch title is-4 has-text-grey-dark'>Specialist</h1>

            {/*dropdown */}
                
                <DropDown tags={specialistTypes} selectedTags={filterItems}/>
                
                <div className="tags my-3">
                    {displayTags}

                    {/*if there is more than 1 active filter then render remove all filter button*/}
                    {listOfFilters.size>=2 &&
                        <span className="tag is-warning">
                        Remove all filters
                        <button className="delete is-small" onClick={()=>{
                            removeAllFilters()
                        }}></button>
                    </span>
                    }
                    
                </div> 
                

                {/*specialist cards */}

                <div className='columns is-multiline  pt-5'>
                    <SpecialistCard data={[...specialistList]} filter={listOfFilters}/>
                </div>
        </div>
    )
}

export default Specialist
