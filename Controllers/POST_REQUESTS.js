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
        db('pacienti').insert(users).then(result=>res.json(result)).catch(err=>res.json(err));
    }       
).catch(err=>res.json(err))  
}

const makeAppointment=(req,res,db)=>{
    const { end_date,start_date,
            nume_medic,prenume_medic,
            id_pacient,
            status,title
        }=req.body;
 db('medici').returning('id','email','nume_medic','prenume_medic').where('nume_medic','=',nume_medic).andWhere('prenume_medic','=',prenume_medic).then(result=>{

    db('appointments').returning('*').insert({
        title:title,
        start_date:start_date,
        end_date:end_date,
        status:status,
        pacient_id:id_pacient,
        medic_id:result[0].id
    }).then(result=>{
        res.json(result);
        const mailOptions= {
            from: 'awsmhealth.notifications@gmail.com',
            to: `${result[0].email}`,
            subject: `AWSMHealth appontment`,
            html: `Salut \n Ati facut o programare pe data de ${start_date} \n Medicul care vă va asista este : ${result[0].nume_medic} ${result[0].prenume_medic} \n Ati selectat Serviciile :  \n Total de plata : ` , 
        }
        mail.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    
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