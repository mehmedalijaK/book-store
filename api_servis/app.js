const express = require('express')
const { sequelize, Knjiga, Kategorija, KnjigaPisac, Pisac, StavkaNarudzbine, Narudzbina } = require("./models");
const app = express()

app.get('/', async (req, res) => {
    console.log("Started server on localhost:8000");
    await sequelize.sync({force:true});
    console.log("DB synced");
})

const knjigaRoutes = require('./routes/knjiga.js')
const pisacRoutes = require('./routes/pisac.js')
const kategorijaRoutes = require('./routes/kategorija.js')
const narudzbinaRoutes = require('./routes/narudzbina.js')

app.use('/knjiga', knjigaRoutes)
app.use('/pisac', pisacRoutes)
app.use('/kategorija', kategorijaRoutes)
app.use('/narudzbina', narudzbinaRoutes)

app.listen(9000)