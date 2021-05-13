
const changeUser=(req,res,db)=>{
    const {id,user_type}=req.body;
    if(user_type==='pacient'){
        const user={
            'nume_pacient':req.body.nume_pacient,
            'prenume_pacient':req.body.prenume_pacient,
            'cnp_pacient':req.body.cnp_pacient,
            'tel_nr':req.body.tel_nr,
            'email':req.body.tel_nr
        }
        db('pacienti').where({id}).update(user).then(result=>res.json(result)).catch(err=>res.json(err));
    }else if(user_type==='medic'){
        const user={
            'nume_medic':req.body.nume_medic,
            'prenume_medic':req.body.prenume_medic,
            'cnp_medic':req.body.cnp_medic,
            'tel_nr':req.body.tel_nr,
            'email':req.body.tel_nr
        }
        db('medici').where({id}).update(user).then(result=>res.json(result)).catch(err=>res.json(err));
    }
    
}
module.exports={
    changeUser:changeUser
}