const express = require('express')
const {Pisac} = require("../models");
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
        const authors = await Pisac.findAll();
        return res.json(authors);
    }catch(err) {
        console.log(err)
        res.status(500).json({error: "Error", data: err})
    }
})

route.get("/:id", async (req, res) => {
    try{
        const authors = await Pisac.findByPk(req.params.id);
        return res.json(authors);
    }catch(err){
         console.log(err)
         res.status(500).json({ error: "Error", data: err })
    }
})

route.post("/", async (req, res) => {
    try{
        const novi = {};
        novi.naziv = req.body.naziv;
        const insertovani = await Pisac.create(novi);
        return res.json(insertovani);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Error", data: err })
    }
})
 
 
route.put("/:id", async (req, res) => {
    try{
        const author = await Pisac.findByPk(req.params.id);
        author.naziv = req.body.naziv;
        author.save();
        return res.json(author);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err })
    }
})


route.delete("/:id", async (req, res) => {
    try{
        const author = await Pisac.findByPk(req.params.id);
        author.destroy();
        return res.json( author.id );
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err });
    }
});
 


module.exports = route