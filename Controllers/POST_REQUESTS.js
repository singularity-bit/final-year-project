
const signin=(req,res,db,bcrypt) => {
    const {username,password}=req.body
    db.select(
        'id',
        'username',
        'password',
        'user_type',
        'nume_pacient',
        'prenume_pacient'
    ).from('pacienti').where('username','=',username)
    .union(qb=>{
        qb.select(
            'id',
            'username',
            'password',
            'user_type',
            'nume_medic',
            'prenume_medic'

        ).from('medici').where('username','=',username)
    }
        
    ).then(result=>{
        console.log("pass",result[0].password)
        bcrypt.compare(password, result[0].password).then(comp=>{
            console.log("compare",comp)
            if(comp){
                if(result[0].user_type==='pacient' | result[0].user_type==='admin'){
                    res.json({
                        id:result[0].id,
                        username:result[0].username,
                        user_type:result[0].user_type,
                        nume_pacient:result[0].nume_pacient,
                        prenume_pacient:result[0].prenume_pacient
                    })
                }else if(result[0].user_type==='medic'){
                    res.json({
                        id:result[0].id,
                        username:result[0].username,
                        user_type:result[0].user_type,
                        nume_medic:result[0].nume_medic,
                        prenume_medic:result[0].prenume_medic
                    })
                }
                
            }else{
                res.json({
                    "code":204,                 
                    "error":"login and password does not match"            
                    })   
            }
        })  
    }).catch(err=>res.json(err));
}

const register= (req,res,db,bcrypt,saltRounds)=>{
    const {nume_pacient,prenume_pacient,username,tel_nr,email,password,cnp_pacient}=req.body   
    bcrypt.hash(password, saltRounds).then(result=>{
        let users={       
            cnp_pacient:cnp_pacient,
            nume_pacient:nume_pacient,
            prenume_pacient:prenume_pacient,
            username:username,
            user_type:"pacient",
            tel_nr:tel_nr,
            email:email,
            password:result
        }           
        db('pacienti').insert(users).then(result=>res.json(result)).catch(err=>res.json(err));
    }       
).catch(err=>res.json(err))  
}

const makeAppointment=(req,res,db)=>{
    const { end_date,start_date,
            nume_medic,prenume_medic,
            prenume_pacient,nume_pacient,
            status,title
        }=req.body;
    const medici_id= db.select('id').from('medici').where('nume_medic','=',nume_medic).andWhere('prenume_medic','=',prenume_medic);
    const pacientID=db.select('id').from('pacienti').where('nume_pacient','=',nume_pacient).andWhere('prenume_pacient','=',prenume_pacient);
    console.log("meidic id",medici_id);
    console.log("pacient id",pacientID)
    db('appointments').returning('*').insert({
        title:title,
        start_date:start_date,
        end_date:end_date,
        status:status,
        pacient_id:pacientID,
        medic_id:medici_id
    }).then(result=>res.json(result)).catch(err=>res.json(err));
}

const updateAppoinment=(req,res,db)=>{
    const {id,status}=req.body;
    db('appointments').where('id','=',`${id}`)
    .update({status:status}).then(result=>result && res.json("success")).catch(err=>res.json(err));
}



module.exports={
    signin:signin,
    register:register,
    makeAppointment:makeAppointment,
    updateAppoinment:updateAppoinment
}