const express = require('express')
const {Knjiga, Kategorija} = require("../models");
const route = express.Router()
const jwt = require('jsonwebtoken');

route.use(express.json())
route.use(express.urlencoded({extended: true}))

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
        console.log("here")
        const books = await Knjiga.findAll({
            include: {
              model: Kategorija, as: "kategorija",
              required: true
            }
          });
        return res.json(books);
    }catch(err) {
        console.log(err)
        res.status(500).json({error: "Error", data: err})
    }
})

route.get("/:id", async (req, res) => {
    try{
        const book = await Knjiga.findByPk(req.params.id);
        return res.json(book);
    }catch(err){
         console.log(err)
         res.status(500).json({ error: "Error", data: err })
    }
})

route.post("/", async (req, res) => {
    try{
        const novi = {};
        novi.naziv = req.body.naziv;
        novi.opis = req.body.opis;
        novi.cena = req.body.cena;
        novi.KategorijaId = req.body.KategorijaId;
        const insertovani = await Knjiga.create(novi);
        return res.json(insertovani);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Error", data: err })
    }
})
 
 
route.put("/:id", async (req, res) => {
    try{
        const book = await Knjiga.findByPk(req.params.id);
        book.naziv = req.body.naziv;
        book.opis = req.body.opis;
        book.cena = req.body.cena;
        book.KategorijaId = req.body.KategorijaId;
        console.log(book)
        book.save();
        return res.json(book);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err })
    }
})


route.put("/promeni-cenu/:id", async (req, res)=> {
    try{
        const book = await Knjiga.findByPk(req.params.id);
        book.cena = req.body.cena;
        book.save();
        return res.json(book);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err })
    }
})


route.delete("/:id", async (req, res) => {
    try{
        const book = await Knjiga.findByPk(req.params.id);
        book.destroy();
        return res.json( book.id );
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err });
    }
});
 


module.exports = route