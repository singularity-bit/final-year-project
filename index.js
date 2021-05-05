const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const knex=require('knex')
const {list}=require('./upcomingAppoinments')
const users=require('./users')


const app = express();

const db=knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'priwet12',
        database : 'awsmhealth'
    }
});
const upcomingAppoinments = db.select(
    'appointments.id',
    'medici.nume_medic',
    'medici.prenume_medic',
    'pacienti.nume_pacient',
    'pacienti.prenume_pacient',
    'appointments.title',
    'appointments.startDate',
    'appointments.endDate',
    'appointments.status'
)
.from('medici')
.join('appointments','medici.id','appointments.medic_id')
.join('pacienti','pacienti.id','appointments.pacient_id')
.where('status','=','active')
.orderBy('appointments.startDate','desc')

const medic_services=(id)=>{
    return db.select(
    'medici.id' ,
	'medici.nume_medic',
	'medici.prenume_medic',
    'services.serviceName',
    'services.servicePrice'
)
.from('medici')
.join('medic_services','medici.id','medic_services.medicID')
.join('services','services.serviceID','medic_services.serviceID')
.where('medici.id','=',id)
}
const specialistCategories=db.select(
    'category'
).from('medici')

const specialistsByCategories=(category)=>{
    return db.select(
        'medici.id' ,
        'medici.category',
        'medici.nume_medic',
        'medici.prenume_medic',
        'services.serviceName',
        'services.servicePrice'
    )
    .from('medici')
    .join('medic_services','medici.id','medic_services.medicID')
    .join('services','services.serviceID','medic_services.serviceID')
    .where('medici.category','=',category)
}

const servicesbyCategories=(category)=>{
    return db.select(
        'services.serviceName',
        'services.servicePrice'
    )
    .from('medici')
    .join('medic_services','medici.id','medic_services.medicID')
    .join('services','services.serviceID','medic_services.serviceID')
    .where('medici.category','=',category)
}

const insertAppointment=(data)=>{
    const { endDate,startDate,
            nume_medic,prenume_medic,
            prenume_pacient,nume_pacient,
            status,title
        }=data;
    const medicID= db.select('medici.id').from('medici').where('medici.nume_medic','=',nume_medic).andWhere('medici.prenume_medic','=',prenume_medic);
    const pacientID=db.select('pacienti.id').from('pacienti').where('pacienti.nume_pacient','=',nume_pacient).andWhere('pacienti.prenume_pacient','=',prenume_pacient);
    return db('appointments').insert({
        title:title,
        startDate:startDate,
        endDate:endDate,
        status:status,
        pacient_id:pacientID,
        medic_id:medicID
    }).then(result=>res.json(result));
}

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res) => {
    res.json(users.db.users)
})

app.get('/upcoming-appoinments',(req,res)=>{
    upcomingAppoinments.then(result=>res.json(result)).catch(err=>res.json(err));
})
app.get('/specialist-by-category/:category',(req,res)=>{
    const {category}=req.params;
    specialistsByCategories(category).then(result=>res.json(result)).catch(err=>res.json(err));
})

app.get('/services-by-category/:category',(req,res)=>{
    const {category}=req.params;
    servicesbyCategories(category).then(result=>res.json(result)).catch(err=>res.json(err));
})

app.get('/categories',(req,res)=>{
    specialistCategories.then(result=>res.json(result)).catch(err=>res.json(err));
})

app.get('/specialists',(req,res)=>{
    db.select('*').from('medici').then(medic=>res.json(medic)).catch(err=>res.json(err));
    
})

app.get('/specialists/:id',(req,res)=>{
    const id=req.params.id
    
    db('medici').returning('*').where('id','=',id).then(pacient=>res.json(pacient)).catch(err=>err)
})

app.get('/pacienti',(req,res)=>{
    db('pacienti').returning('*').then(pacient=>res.json(pacient)).catch(err=>err)
})

app.get('/pacienti/:id',(req,res)=>{
    const id=req.params.id
    
    db('pacienti').returning('*').where('id','=',id).then(pacient=>res.json(pacient)).catch(err=>err)
})

app.get('/medic-services/:id',(req,res)=>{
    const {id}=req.params;
    medic_services(id).then(result=>res.json(result)).catch(err=>res.json(err));
})

app.post('/signin',(req, res) => {
    if(req.body.email===users.db.users[0].email && req.body.password===users.db.users[0].password){
        res.json('success')
    }else{
        res.status(400).json('error')
    }
    res.json("signin")
})

app.post('/make-appointment',(req,res)=>{  
    const { endDate,startDate,
        nume_medic,prenume_medic,
        prenume_pacient,nume_pacient,
        status,title
    }=req.body;
    const medicID= db.select('medici.id').from('medici').where('medici.nume_medic','=',nume_medic).andWhere('medici.prenume_medic','=',prenume_medic);
    const pacientID=db.select('pacienti.id').from('pacienti').where('pacienti.nume_pacient','=',nume_pacient).andWhere('pacienti.prenume_pacient','=',prenume_pacient);
    db('appointments').insert({
        title:title,
        startDate:startDate,
        endDate:endDate,
        status:status,
        pacient_id:pacientID,
        medic_id:medicID
    }).then(result=>res.json(result)).catch(err=>res.json(err));
})

app.put('/update-appointments',(req,res)=>{

    const {id,status}=req.body;
    db('appointments').where('id','=',`${id}`)
    .update({status:status}).catch(err=>res.json(err));
    
    upcomingAppoinments.then(result=>res.json(result)).catch(err=>res.json(err));
    
})
app.post('/register',(req, res) =>{
    const {email,name,password}=req.body;
    users.db.users.push({
        id:'3',
        name:name,
        email:email,
        password:password
    })
    res.json(users.db.users[users.db.users.length-1]);
})

app.delete('/delete',(req,res)=>{
    const {id,user_type}=req.body;
    if(user_type==='pacient'){
        db('pacienti').where({id}).del().then(result=>res.json(result)).catch(err=>res.json(err));
    }else if (user_type==='medic'){
        db('medici').where({id}).del().then(result=>res.json(result)).catch(err=>res.json(err));
    }
    
})
app.put('/change-user',(req,res)=>{
    const {id,user_type}=req.body;
    
    if(user_type==='pacient'){
        db('pacienti').where({id}).update(req.body).then(result=>res.json(result)).catch(err=>res.json(err));
    }else if(user_type==='medic'){
        db('medici').where({id}).update(req.body).then(result=>res.json(result)).catch(err=>res.json(err));
    }
    
})

app.listen(3000);

/*
/--> res=home
/signin -->POST =succes/fail
/register -->POST=user --

*/