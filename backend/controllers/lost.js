const Item = require('../models/Item')
const getAllLost = async(req,res) => {
  try{
  const item = await Item.find({})
  res.status(200).json({ item }) 
  }
  catch(error){
    res.status(500).json({msg:error})
  }   
}

const createLost = async (req,res) => { 
  try{
  const item = await Item.create(req.body)
  res.status(201).json({ item })  
  }
  catch(error){
    res.status(500).json({msg:error})
  }
}

const getSingleLost = async(req,res) => {
  try{
    const { id: itemID } = req.params
    const item = await Item.findOne({ _id: itemID })
    if (!item) {
      return  res.status(404).json({msg:`No task with id : ${itemID}`})
    }
  
    res.status(200).json({ item })
    
}
catch(error){
  res.status(500).json({msg:error})
}
}

const updateLost = async(req,res) => {
  try{
    const { id: itemID } = req.params
    const item = await Item.findOneAndUpdate({ _id: itemID })
    if (!item) {
      return  res.status(404).json({msg:`No task with id : ${itemID}`})
    }
  
    res.status(200).json({ item })
    
}
catch(error){
  res.status(500).json({msg:error})
}  
  }

const deleteLost = (req,res) => {
    res.send('delete lost')  
}

module.exports = {
    getAllLost, createLost, getSingleLost, updateLost, deleteLost, 
}