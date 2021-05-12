
const deleteUser=(req,res,db)=>{
    const {id,user_type}=req.body;
    if(user_type==='pacient'){
        db('pacienti').where({id}).del().then(result=>res.json(result)).catch(err=>res.json(err));
    }else if (user_type==='medic'){
        db('medici').where({id}).del().then(result=>res.json(result)).catch(err=>res.json(err));
    }
}

module.exports={
    deleteUser:deleteUser
}