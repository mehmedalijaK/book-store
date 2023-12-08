const express = require('express')
const route = express.Router()

route.use(express.json())
route.use(express.urlencoded({extended: true}))

route.get('/', async (req, res)=>{
    try{
        return res.json("All categories")
    }catch(err) {
        console.log(err)
        res.status(500).json({error: "Error", data: err})
    }
})

route.get("/:id", async (req, res) => {
    try{
         return res.json("Category with id=" + req.params.id)
    }catch(err){
         console.log(err)
         res.status(500).json({ error: "Error", data: err })
    }
})

route.post("/", async (req, res) => {
    try{
         return res.json("New category")
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Error", data: err })
    }
})
 
 
route.put("/:id", async (req, res) => {
    try{
        return res.json("Edit category with id")
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err })
    }
})


route.delete("/:id", async (req, res) => {
    try{
        return res.json(req.params.id);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Error", data: err });
    }
});
 


module.exports = route