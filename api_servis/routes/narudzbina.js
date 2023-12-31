const express = require('express')
const {Narudzbina, StavkaNarudzbine} = require("../models");
const route = express.Router()

route.use(express.json())
route.use(express.urlencoded({extended: true}))

const jwt = require('jsonwebtoken');
function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if (token == null) return res.status(401).json({ msg: err });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
       if (err) return res.status(403).json({ msg: err });
       req.user = user;
       next();
    });
    
  }
  
route.use(authToken);


route.get('/', async (req, res)=>{
    try{
        const orders = await Narudzbina.findAll();
        return res.json(orders);
    }catch(err) {
        console.log(err)
        res.status(500).json({error: "Error", data: err})
    }
})

route.get('/proizvodi/:id', async (req, res) => {
    try{
        const products = await StavkaNarudzbine.findAll({
            where: {
              NarudzbinaId: req.params.id
            }
          });
        return res.json(products);
    }catch(err){
        console.log(err)
        res.status(500).json({ error: "Error", data: err })
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
        novi.status = req.body.status
        novi.vreme_narucivanja = req.body.vreme_narucivanja
        novi.zakazano_vreme = req.body.zakazano_vreme
        novi.adresa = req.body.adresa
        novi.telefon = req.body.telefon
        novi.ime_prezime = req.body.ime_prezime
        order_details = req.body.order_details

        const insertovani = await Narudzbina.create(novi);
        console.log(insertovani)
        order_details.forEach(async (detail) => {
            const insert = await StavkaNarudzbine.create({
                komada: detail.quantity,
                jedinicna_cena: detail.bookPrice,
                KnjigaId: detail.bookId,
                NarudzbinaId: insertovani.id
            })
        })

        return res.json(insertovani);

    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Error", data: err })
    }
})
 
 
route.put("/:id", async (req, res) => {
    try{
        const novi = await Narudzbina.findByPk(req.params.id);
        novi.status = req.body.status
        await novi.save();
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