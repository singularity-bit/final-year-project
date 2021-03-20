import React,{useState} from 'react'
import SpecialistCard from '../../Components/SpecialistCard/SpecialistCard'
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

    const [isOpen,setOpen]=useState(false);
    const [itemIsActive,setItemActive]=useState(false);
    const [selectedItem,setSelectedItem]=useState('all');

    const handleItemClick=()=>{
        setItemActive(!itemIsActive);
        
    }
    const dropdownItems=specialistTypes.map((item,index)=>{
        
        return(
            <a key={index}  onClick={()=>{
                
                setSelectedItem(item);
                
                handleItemClick();
            }}
            className={"dropdown-item"}
            >
                    {item}
                </a>
        )

    })
    return (
        <div>
            <h1 className=' has-text-centered-touch title is-4 has-text-grey-dark'>Specialist</h1>

            {/*dropdown */}

                <div className={isOpen?"dropdown is-active":"dropdown"}>
                <div className="dropdown-trigger">
                    <button className="button" onClick={()=>{
                        
                        setOpen(!isOpen)
                    }} aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Sort by {selectedItem}</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                    <div className="dropdown-content">                
                        {dropdownItems}
                    <hr className="dropdown-divider"/>
                    <a href="#" className="dropdown-item">
                        More
                    </a>
                    </div>
                </div>
                </div>
                
                

                {/*specialist cards */}

                <div className='columns is-multiline pt-5'>
                    <SpecialistCard data={specialistList} filter={selectedItem}/>
                </div>
        </div>
    )
}

export default Specialist
