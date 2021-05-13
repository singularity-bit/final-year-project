const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const knex=require('knex')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { signin,
        register,
        makeAppointment,
        updateAppoinment
}=require('./Controllers/POST_REQUESTS')
const { upcomingPacientAppointments,
        upcomingMedicAppointments,
        Appointments,
        upcomingAppointments,
        getSpecialistsByCategory,
        getServicesByCategory,
        getCategories,
        getSpecialists,
        getSpecialistProfile,
        getPacienti,       
        getPacientProfile,
        getMedicServices
}=require('./Controllers/GET_REQUESTS')
const {deleteUser}=require('./Controllers/DELETE_REQUESTS')
const {changeUser}=require('./Controllers/PUT_REQUESTS')

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

app.use(bodyParser.json());
app.use(cors());

app.get('/appoinments',(req,res)=>Appointments(req,res,db))
app.get('/upcoming-appoinments',(req,res)=>upcomingAppointments(req,res,db))
app.get('/upcoming-pacient-appoinments',(req,res)=>upcomingPacientAppointments(req,res,db))

app.get('/upcoming-medic-appoinments',(req,res)=>upcomingMedicAppointments(req,res,db))
app.get('/specialist-by-category',(req,res)=>getSpecialistsByCategory(req,res,db))

app.get('/services-by-category/:category',(req,res)=>getServicesByCategory(req,res,db))

app.get('/categories',(req,res)=>getCategories(req,res,db))

app.get('/specialists',(req,res)=>getSpecialists(req,res,db))

app.get('/specialists/:id',(req,res)=>getSpecialistProfile(req,res,db))

app.get('/pacienti',(req,res)=>getPacienti(req,res,db))

app.get('/pacienti/:id',(req,res)=>getPacientProfile(req,res,db))

app.get('/medic-services/:id',(req,res)=>getMedicServices(req,res,db))

app.post('/signin',(req,res)=>signin(req,res,db,bcrypt))


app.post('/make-appointment',(req,res)=>makeAppointment(req,res,db))

app.post('/update-appointments',(req,res)=>updateAppoinment(req,res,db))

app.post('/register', (req, res) =>register(req,res,db,bcrypt,saltRounds))

app.delete('/delete',(req,res)=>deleteUser(req,res,db))
app.put('/change-user',(req,res)=>changeUser(req,res,db))

app.listen(3000);
