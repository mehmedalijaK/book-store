const express = require('express')
const {Kategorija} = require("../models");
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
        console.log("test")
        const categories = await Kategorija.findAll();
        return res.json(categories);
    }catch(err) {
        console.log(err)
        res.status(500).json({error: "Error", data: err})
    }
})

route.get("/:id", async (req, res) => {
    try{
        const categories = await Kategorija.findByPk(req.params.id);
        return res.json(categories);
    }catch(err){
         console.log(err)
         res.status(500).json({ error: "Error", data: err })
    }
})

route.post("/", async (req, res) => {
    try{
        const novi = {};
        novi.naziv = req.body.naziv;
        const insertovani = await Kategorija.create(novi);
        return res.json(insertovani);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Error", data: err })
    }
})
 
 
route.put("/:id", async (req, res) => {
    try{
        const category = await Kategorija.findByPk(req.params.id);
        category.naziv = req.body.naziv;
        category.save();
        return res.json(category);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err })
    }
})


route.delete("/:id", async (req, res) => {
    try{
        const category = await Kategorija.findByPk(req.params.id);
        category.destroy();
        return res.json( category.id );
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err });
    }
});
 


module.exports = route