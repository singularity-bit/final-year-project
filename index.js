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


app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res) => {
    res.json(users.db.users)
})

app.get('/upcoming-appoinments',(req,res)=>{

    
    upcomingAppoinments.then(result=>res.json(result)).catch(err=>res.json(err));
})

app.put('/update-appointments',(req,res)=>{

    const {id,status}=req.body;
    db('appointments').where('id','=',`${id}`)
    .update({status:status}).catch(err=>res.json(err));
    
    upcomingAppoinments.then(result=>res.json(result)).catch(err=>res.json(err));
    
})

app.get('/specialists',(req,res)=>{
    db('medici').returning('*').then(medic=>res.json(medic)).catch(err=>res.json(err));
    
})

app.get('/specialist-profile',(req,res)=>{

})

app.post('/signin',(req, res) => {
    if(req.body.email===users.db.users[0].email && req.body.password===users.db.users[0].password){
        res.json('success')
    }else{
        res.status(400).json('error')
    }
    res.json("signin")
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

app.listen(3000);

/*
/--> res=home
/signin -->POST =succes/fail
/register -->POST=user --

*/