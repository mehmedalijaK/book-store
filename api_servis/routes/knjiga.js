const express = require('express')
const {Knjiga} = require("../models");
const route = express.Router()

route.use(express.json())
route.use(express.urlencoded({extended: true}))

route.get('/', async (req, res)=>{
    try{
        console.log("here")
        const books = await Knjiga.findAll();
       
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
        novi.naziv = req.query.naziv;
        novi.opis = req.query.opis;
        novi.cena = req.query.cena;
        novi.KategorijaId = req.query.KategorijaId;
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
        book.naziv = req.query.naziv;
        book.opis = req.query.opis;
        book.cena = req.query.cena;
        book.KategorijaId = req.query.KategorijaId;
        console.log(book)
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