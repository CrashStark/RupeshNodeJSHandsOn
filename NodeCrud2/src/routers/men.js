const express=require('express');
const router=express.Router();
const mensRanking = require('../models/mens');

router.post('/mens', async (req, res, next) => {
    try {
      const mensRec=  new mensRanking(req.body);
      console.log(req.body);
      const insertMens=await  mensRec.save();
      res.status(200).send(insertMens);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/mens',async (req, res, next) => {
    try {
        const mensData= await mensRanking.find({}).sort({"ranking":1});
        res.status(201).json(mensData);
    }catch(e){
        res.send("An Error Occured");
    }
})

//get Data of Individual
router.get('/men/:id',async (req, res, next) => {
    try {
        const id=req.params.id;
        const menData= await mensRanking.findById(id);
        res.status(200).json(menData);
    }catch(e){
        res.send("An Error Occured");
    }
})

router.patch('/men/:id',async (req, res, next) => {
    try {
        const id=req.params.id;
        const menData= await mensRanking.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(menData);
    }catch(e){
        res.status(500).send("An Error Occured");
    }
})

router.delete('/men/:id',async (req, res, next) => {
    try {
        const id=req.params.id;
        const menData= await mensRanking.findByIdAndDelete(id);
        res.status(200).json(menData);
    }catch(e){
        res.status(500).send("An Error Occured");
    }
})

module.exports=router;