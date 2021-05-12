//all get requests

const upcomingPacientAppointments=(req,res,db)=>{
    const {id}=req.query
    db.select(
        'appointments.id',
        'medici.nume_medic',
        'medici.prenume_medic',
        'pacienti.nume_pacient',
        'pacienti.prenume_pacient',
        'appointments.title',
        'appointments.start_date',
        'appointments.end_date',
        'appointments.status'
    )
    .from('medici')
    .join('appointments','medici.id','appointments.medic_id')
    .join('pacienti','pacienti.id','appointments.pacient_id')
    .where('status','=','active').andWhere('pacienti.id','=',id)
    .orderBy('appointments.start_date','desc')
    .then(result=>res.json(result)).catch(err=>res.json(err));
}
const Appointments=(req,res,db)=>{
    db.select(
        'appointments.id',
        'medici.nume_medic',
        'medici.prenume_medic',
        'pacienti.nume_pacient',
        'pacienti.prenume_pacient',
        'appointments.title',
        'appointments.start_date',
        'appointments.end_date',
        'appointments.status'
    )
    .from('medici')
    .join('appointments','medici.id','appointments.medic_id')
    .join('pacienti','pacienti.id','appointments.pacient_id')
    .orderBy('appointments.start_date','desc')
    .then(result=>res.json(result)).catch(err=>res.json(err));
}

const upcomingAppointments=(req,res,db)=>{
    db.select(
        'appointments.id',
        'medici.nume_medic',
        'medici.prenume_medic',
        'pacienti.nume_pacient',
        'pacienti.prenume_pacient',
        'appointments.title',
        'appointments.start_date',
        'appointments.end_date',
        'appointments.status'
    )
    .from('medici')
    .join('appointments','medici.id','appointments.medic_id')
    .join('pacienti','pacienti.id','appointments.pacient_id')
    .where('status','=','active')
    .orderBy('appointments.start_date','desc')
    .then(result=>res.json(result)).catch(err=>res.json(err));
}

const upcomingMedicAppointments=(req,res,db)=>{
    const {id}=req.query;
    console.log("id")
    db.select(
        'appointments.id',
        'medici.nume_medic',
        'medici.prenume_medic',
        'pacienti.nume_pacient',
        'pacienti.prenume_pacient',
        'appointments.title',
        'appointments.start_date',
        'appointments.end_date',
        'appointments.status'
    )
    .from('medici')
    .join('appointments','medici.id','appointments.medic_id')
    .join('pacienti','pacienti.id','appointments.pacient_id')
    .where('status','=','active').andWhere('medici.id','=',id)
    .orderBy('appointments.start_date','desc')
    .then(result=>res.json(result)).catch(err=>res.json(err));
}

const getSpecialistsByCategory=(req,res,db)=>{
    const {category}=req.query;
    db.distinct(
        'medici.id',
        'medici.nume_medic',
        'medici.prenume_medic'
    )
    .from('medici')
    .where('medici.category','=',category)
    .then(result=>res.json(result)).catch(err=>res.json(err));
}

const getServicesByCategory=(req,res,db)=>{
    const {category}=req.params;
    db.select(
        'services.service_name',
        'services.service_price'
    )
    .from('medici')
    .join('medic_services','medici.id','medic_services.medici_id')
    .join('services','services.service_id','medic_services.service_id')
    .where('medici.category','=',category)
    .then(result=>res.json(result)).catch(err=>res.json(err));
}

const getCategories=(req,res,db)=>{
    db.select(
        'category'
    ).from('medici')
    .then(result=>res.json(result)).catch(err=>res.json(err));
}

const getSpecialists=(req,res,db)=>{
    db.select('*').from('medici').then(medic=>res.json(medic)).catch(err=>res.json(err));
}

const getSpecialistProfile=(req,res,db)=>{
    const id=req.params.id    
    db('medici').returning('*').where('id','=',id).then(specialist=>res.json(specialist)).catch(err=>err)
}

const getPacienti=(req,res,db)=>{
    db('pacienti').returning('*').then(pacient=>res.json(pacient)).catch(err=>err)
}

const getPacientProfile=(req,res,db)=>{
    const id=req.params.id   
    db('pacienti').returning('*').where('id','=',id).then(pacient=>res.json(pacient)).catch(err=>err)
}

const getMedicServices=(req,res,db)=>{
    const {id}=req.params;
    db.select(
        'medici.id' ,
        'medici.nume_medic',
        'medici.prenume_medic',
        'services.service_name',
        'services.service_price'
    )
    .from('medici')
    .join('medic_services','medici.id','medic_services.medici_id')
    .join('services','services.service_id','medic_services.service_id')
    .where('medici.id','=',id)
    .then(result=>res.json(result)).catch(err=>res.json(err));
}
module.exports={
    Appointments:Appointments,
    upcomingAppointments:upcomingAppointments,
    upcomingPacientAppointments:upcomingPacientAppointments,
    upcomingMedicAppointments:upcomingMedicAppointments,
    getSpecialistsByCategory:getSpecialistsByCategory,
    getServicesByCategory:getServicesByCategory,
    getCategories:getCategories,
    getSpecialists:getSpecialists,
    getSpecialistProfile:getSpecialistProfile,
    getPacienti:getPacienti,
    getPacientProfile:getPacientProfile,
    getMedicServices:getMedicServices 
}