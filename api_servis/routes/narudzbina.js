const express = require('express')
const {Narudzbina} = require("../models");
const route = express.Router()

route.use(express.json())
route.use(express.urlencoded({extended: true}))

route.get('/', async (req, res)=>{
    try{
        const orders = await Narudzbina.findAll();
        return res.json(orders);
    }catch(err) {
        console.log(err)
        res.status(500).json({error: "Error", data: err})
    }
})

route.get("/:id", async (req, res) => {
    try{
        const orders = await Narudzbina.findByPk(req.params.id);
        return res.json(orders);
    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Error", data: err })
    }
})

route.post("/", async (req, res) => {
    try{
        const novi = {};
        novi.status = req.query.status
        novi.vreme_narucivanja = req.query.vreme_narucivanja
        novi.zakazano_vreme = req.query.zakazano_vreme
        novi.adresa = req.query.adresa
        novi.telefon = req.query.telefon
        novi.ime_prezime = req.query.ime_prezime
        const insertovani = await Narudzbina.create(novi);
        return res.json(insertovani);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Error", data: err })
    }
})
 
 
route.put("/:id", async (req, res) => {
    try{
        const novi = await Narudzbina.findByPk(req.params.id);
        novi.status = req.query.status
        novi.save();
        return res.json(novi);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err })
    }
})


route.delete("/:id", async (req, res) => {
    try{
        const order = await Narudzbina.findByPk(req.params.id);
        order.destroy();
        return res.json( order.id );
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err });
    }
});
 


module.exports = route