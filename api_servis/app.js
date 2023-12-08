const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello from REST API service')
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