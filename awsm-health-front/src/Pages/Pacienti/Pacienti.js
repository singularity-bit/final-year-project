import React,{useState,useEffect} from 'react'
import axios from 'axios'
import SpecialistCard from '../../Components/SpecialistCard/SpecialistCard'

//const activeTags=new Set();
function Pacienti() {
    
    
    const [pacienti, setPacienti] = useState()

    //on page load display all pacienti
    useEffect(()=>{
        axios.get('http://localhost:3000/specialists').then(res=>{
        setPacienti(res.data);   
    })
    },[])

    return (
        <div className="container is-fluid">
            <h1 className=' has-text-centered-touch title is-4 has-text-grey-dark'>Pacienti</h1>


                {/*pacienti cards */}

                <div className='columns is-multiline  pt-5'>
                    <SpecialistCard data={pacienti}/>
                </div>
        </div>
    )
}

export default Pacienti

