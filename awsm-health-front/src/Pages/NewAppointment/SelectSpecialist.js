import React,{useState,useEffect} from 'react'
import axios from 'axios'

function SelectSpecialist(props) {
    const {selectedSpecialist,category}=props

    const [activeSpecialists, setactiveSpecialist] = useState([]);

    const specialistList=activeSpecialists.length>0 && activeSpecialists?.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>;
    })

    
    
    useEffect(()=>{

        axios.get(`http://localhost:3000/specialist-by-category/${category}`).then(res=>{
            //pentru a returna doar numele specialistului si a nu se repeta  
            setactiveSpecialist(Array.from(new Set(res.data.map(item=>{return `${item.nume_medic} ${item.prenume_medic}`}))));
            console.log("active specialist",activeSpecialists)
            });
    },[category])

    return (
        <div className="field is-narrow">
            <div className="control">
                <div className="select is-fullwidth">
                    <select  onChange={(e)=>selectedSpecialist(e.target.value)}>
                    <option selected disabled>Choose specialist</option>
                        {specialistList}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectSpecialist
