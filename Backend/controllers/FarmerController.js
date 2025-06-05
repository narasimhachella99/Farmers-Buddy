import Farmer from "../model/Farmer.js";

export const addFarmer = async (req, res) => {
    try {
        const data = req.body;
        const farmer = new Farmer(data);
        await farmer.save();
        res.status(200).send(farmer);
    } catch (error) {
        res.status(500).send({ error: error })
    }
}
export const getFarmers =async(req,res)=>{
    try{
        const data= await Farmer.find();
        res.status(200).send(data);
    }catch(error){
        res.status(500).send({error:error})
    }
}
export const getFarnmerById=async(req,res)=>{
    try{
    const id=req.params.id;
    const data=await Farmer.findOne(id)
    res.status(200).send(data)
    }catch(error){
        res.status(500).send({error:error})
    }
}
export const getFarmerByEmail=async(req,res)=>{
    try{
    const email=req.params.email;
    const data=await Farmer.findOne({email:email})
    res.status(200).send(data)
    }catch(error){
        res.status(500).send({error:error})
    }
}
export const updateFarmer =async(req,res)=>{
    try{
        const id=req.params.id;
        const data= await Farmer.findByIdAndUpdate(id,req.body,{require:true})
        res.status(200).send(data)
    }catch(error){
        res.status(500).send({error:error})
    }
}

export const deleteFarmer=async(req,res)=>{
    try{
        const id=req.params.id;
        const data=await Farmer.findByIdAndDelete(id)
        res.status(200).send({error:"Farmer deleted successfully"})
    }catch(error){
        res.status(200).send({error:error})
    }
}
