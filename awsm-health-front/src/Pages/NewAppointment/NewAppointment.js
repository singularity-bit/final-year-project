import React,{useContext,useState,useEffect} from 'react'
import './NewAppointment.css'
import {CategoryContext,SpecialistContext} from '../Specialist/CategoryContext'
function NewAppointment() {
    const category=useContext(CategoryContext)
    const specialist=useContext(SpecialistContext)
    const [activeCategory, setActiveCategory] = useState('')
    const [activeSpecialists, setactiveSpecialist] = useState([])
    const [selectSpecialist, setselectSpecialist] = useState([])
    const [activeService, setactiveService] = useState([])
    const [totalPrice, settotalPrice] = useState(0)

    const onChangeCategory=(e)=>{
        setActiveCategory(e)
        
    }
    const onChangeSpecialist=(e)=>{
        const listCopy=[...activeSpecialists].filter(item=>{
            return item.name===e 
        })
        setselectSpecialist(listCopy)

    }
    const onChangeService=(e)=>{
            
            const result=activeService.find((item)=>item===e)
            result===undefined?setactiveService([...activeService,e]):
            setactiveService(activeService.filter(item=>{return item!==e}))
            
            
    }
    const categoryList=category.map((item,index)=>{  
            return (
            <option key={index} value={item}>{item}</option>
            )
    })

    const specialistList=activeSpecialists.map((item)=>{
        return <option key={item.id} value={item.name}>{item.name}</option>;
    })

    const servicesList=
        selectSpecialist[0]?.service?.map((item,index)=>{
        return <option key={index} value={item.serviceName}>{item.serviceName}</option>;
    })

    useEffect(() => {
        const listCopy=[...specialist].filter(item=>{
            return item.category===activeCategory 
        })
        
        setactiveSpecialist(listCopy)
        console.log("category ",activeCategory)
        console.log("spec ",listCopy)
    }, [activeCategory]) 


    useEffect(()=>{
        var sum=0
        const temp=selectSpecialist[0]?.service?.filter((item,index)=>{
            return item.serviceName===activeService.find((i)=>i===item.serviceName)
        })
        
        temp?.forEach((i)=>{
            
            var price=i.servicePrice
            var priceInt=parseInt(price,10)
            sum=sum+priceInt
            
        })
        settotalPrice(sum)
 
    },[activeService])
    
    return (
        <article className='panel is-primary my-6 '>
            <p class="panel-heading">
                Create new appointment
            </p>
            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal ">
                    
                    <div className="field-label is-normal">
                        <label className="label">Nume</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="Name"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>
                        </p>
                        </div>
                    </div>            
                    <div className="field-label is-normal">
                        <label className="label">Prenume</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="prenume"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>
                        </p>
                        </div>
                    </div>
                </div>
                </p>
                
            </p>
            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal ">
                <div className="field-label"><label className="label">email</label></div>
                <div className="field-body">
                <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right">
                        <input class="input is-success" type="email" placeholder="Email"/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>


                <div className="field-label is-normal">
                    <label class="label">Nr</label>
                    </div> 
                    <div className="field is-expanded">
                    <div className="field has-addons">
                    
                    
                        <p className="control">
                        <a className="button is-static">
                            +44
                        </a>
                        </p>
                        <p className="control is-expanded">
                        <input className="input" type="tel" placeholder="Your phone number"/>
                        </p>
                    </div>                 
                    </div>
                </div>
                </div>
                </p>
                
            </p>
            
            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal ">
                <div className="field-label is-normal">
                    <label className="label">Category</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                    <div className="control">
                        <div className="select is-fullwidth">
                        <select onChange={(e)=>onChangeCategory(e.target.value)}>
                            {categoryList}
                        </select>
                        </div>
                    </div>
                    </div>
                    <p className='control'>
                <div className="field is-horizontal ">
                <div className="field-label is-normal">
                    <label className="label">Choose Specialist</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                    <div className="control">
                        <div className="select is-fullwidth">
                        <select  onChange={(e)=>onChangeSpecialist(e.target.value)}>
                            {specialistList}
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </p>  
                <p className='control'>
                    <div className='field is-horizontal'>
                    <div className="field-label is-normal">
                        <label className="label">Choose service</label>
                    </div>
                    <div className="field-body">
                        <div className="field is-narrow">
                        <div className="control">
                            <div className="select is-fullwidth">
                            <select onChange={(e)=>onChangeService(e.target.value)}>
                                {servicesList}
                            </select>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> 
                </p>
                </div>
                </div>
                </p>              
            </p>

            <p className='panel-block'>
                
                           
            </p>

            <p className='panel-block'>
                <p className='control'>
                <div className="field is-horizontal block">
                    <div className="field-label is-normal">
                        <label className="label">Subject</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                        <div className="control">
                            <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity"/>
                        </div>
                        <p className="help is-danger">
                            This field is required
                        </p>
                        </div>
                    </div>
                    </div>
                </p>
                
            </p>    
                
            <p className='panel-block'>
            <p className='control'>
            <div className="field is-horizontal block">
                <div className="field-label is-normal">
                    <label className="label">Question</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
                    </div>
                    </div>
                </div>
                </div>
            </p>
            
            </p>              
            <p className='panel-block'>
            <p className='control'>
            <div className="field is-horizontal block">
                
                <div className="field-body">
                    <div className="field is-narrow">
                    <div className="control">
                        <button className="button is-primary">
                        Send message
                        </button>
                    </div>
                    </div>
                </div>
                <div className="field-label">
                    Total de plata: {<span>{totalPrice}</span>} {activeService.map((item,index)=>{
                        return <p className="has-text-weight-medium"> {item}</p>
                    })}
                </div>
                </div>
            </p>
           
            </p>
                
        </article>
    )
}

export default NewAppointment
