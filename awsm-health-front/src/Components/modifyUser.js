import axios from 'axios'
const modifyUser=(method,id,type)=>{
    if(method==='delete'){
        axios.post('http://localhost:3000/delete',{
            id:id,
            type:type,
            method:method
        }).then(res=>console.log(res))
    }else if (method==='update'){
        axios.put('http://localhost:3000/change-user',{
            id:id,
            type:type,
            method:method
        }).then(res=>console.log(res))
    }
}
export default modifyUser