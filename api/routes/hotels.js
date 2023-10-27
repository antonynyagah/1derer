import express from "express"
import hotel from "../models/hotel.js";

const router = express.Router();

//create
router.post("/", async (req,res)=>{

    const newHotel = new hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
        
    }catch(err){
        res.status(500).json(err)
    }
})



//update

router.put("/:id", async (req,res)=>{

    try{
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
        
    }catch(err){
        res.status(500).json(err)
    }
})


//delete

router.delete("/:id", async (req,res)=>{

    try{
       await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel deleted")
        
    }catch(err){
        res.status(500).json(err)
    }
})


//get hotel by id

router.get("/:id", async (req,res)=>{

    try{
        const getSpecificHotel = await hotel.findById(req.params.id)
        res.status(200).json(getSpecificHotel)
        
    }catch(err){
        res.status(500).json(err)
    }
})

//get all

router.get("/", async (req,res)=>{

    try{
        const hotels = await hotel.find()
        res.status(200).json(hotels)
        
    }catch(err){
        res.status(500).json(err)
    }
})
export default router