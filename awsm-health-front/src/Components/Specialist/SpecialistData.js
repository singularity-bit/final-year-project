import React,{useState} from 'react'
import '../Specialist/SpecialistData.css'

function SpecialistData(props) {
    const {userData}=props;
    const [activeTab, setActiveTab] = useState('info');

    //personal info
    const personalInfo={
        name:`${userData.name}`,
        category:`${userData.category}`,
        gender:`Male`,
        adress:`adress`,
        phoneNr:`phonenr`,
        email:`email@email.com`
    }
    //servicii
    const servicii=[{
        serviceName:"consult1",
        servicePrice:100+" lei"
    },
    {
        serviceName:"consult2",
        servicePrice:200+" lei"
    },
    {
        serviceName:"consult3",
        servicePrice:50+" lei"
    },
    {
        serviceName:"consult4",
        servicePrice:1000+" lei"
    }]

    const personalInfoList=()=>{
        return(
            <tbody >
                <tr>
                    <td>Name</td>
                    <th align="right">{personalInfo.name}</th>
                </tr>
                <tr>
                    <td>Category</td>
                    <th align="right">{personalInfo.category}</th>
                </tr>
                <tr>
                    <td>Gender</td>
                    <th align="right">{personalInfo.gender}</th>
                </tr>
                <tr>
                    <td>Adress</td>
                    <th align="right">{personalInfo.adress}</th>
                </tr>
                <tr>
                    <td>Phone nr</td>
                    <th align="right">{personalInfo.phoneNr}</th>
                </tr>
                <tr>
                    <td>Email</td>
                    <th align="right">{personalInfo.email}</th>
                </tr>
            </tbody>
            
        )
    }

    const serviceList=servicii.map((item,index)=>{
        return(
                <tr>
                    <td>{item.serviceName}</td>
                    <th align="right">{item.servicePrice}</th>
                </tr>
            
            
        ) 
    })

    return (
        <div>
            <div className="tabs">
                <ul>
                    <li onClick={()=>setActiveTab('info')} className={activeTab=='info'?"is-active":""}><a>Personal info</a></li>
                    <li onClick={()=>setActiveTab('price')} className={activeTab=='price'?"is-active":""}><a>Preturi</a></li>

                </ul>
            </div>

            <table className="table">
                { activeTab=='info'?personalInfoList():<tbody>{serviceList}</tbody>}
            </table>
        </div>
    )
}

export default SpecialistData
