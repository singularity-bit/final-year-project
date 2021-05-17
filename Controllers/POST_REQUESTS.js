const nodemailer=require('nodemailer')


const mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'awsmhealth.notifications@gmail.com',
      pass: 'priwet12'
    }
  });
  


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
        console.log("users register",users)  
        db.select('*').from('pacienti').where('username','=',users.username).then(output=>{
            if(output.length>0){  
                res.json('status:406',
                ' message:this user already exists')
            }else{
                db('pacienti').insert(users).then(result=>{console.log("register:",result); res.json(result)}).catch(err=>res.json(err));
            }
        })      
        
    }       
).catch(err=>res.json(err))  
}

const makeAppointment=(req,res,db)=>{
    const { end_date,
            start_date,
            nume_medic,prenume_medic,
            id_pacient,
            selectedServices,
            totalPrice,
            status,title
        }=req.body;
 db('medici').returning('id','email','nume_medic','prenume_medic').where('nume_medic','=',nume_medic).andWhere('prenume_medic','=',prenume_medic).then(medic=>{

    db('appointments').returning('*').insert({
        title:title,
        start_date:start_date,
        end_date:end_date,
        status:status,
        pacient_id:id_pacient,
        medic_id:medic[0].id,
        services:`${selectedServices?.map(item=>{
            return ` ${item.service_name} `
            })}`,
        total_price:totalPrice
    }).then(result=>{
        res.json(result);
        
        db('pacienti').returning('email').where('id','=',id_pacient).then(pacient_email=>{
            const mailOptions= {
                from: 'awsmhealth.notifications@gmail.com',
                to: `${pacient_email[0].email}`,
                cc: `${medic[0].email}`,
                subject: `AWSMHealth appointment`,
                html: `<p>Salut \n Aveti o programare pe data de ${start_date}</p>
                    <p>Medicul care vă va asista este : ${medic[0].nume_medic} ${medic[0].prenume_medic} </p> 
                    <p>Aveti selectate  Serviciile : 
                        <span>${selectedServices?.map(item=>{
                            return ` ${item.service_name} (pret : ${item.service_price} lei),`
                            })}
                        </span> 
                    </p>
                    <p>Total de plata :${totalPrice} </p>
                    <br/><br/>
                    <h1>Cu stima,</h1>
                    <h1>Echipa AWSMHealth</h1>` , 
                
            }
            mail.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        })
        
    
    }).catch(err=>res.json(err));
 });

    
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