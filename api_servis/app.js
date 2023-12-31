const express = require('express')
const { sequelize, Knjiga, Kategorija, KnjigaPisac, Pisac, StavkaNarudzbine, Narudzbina } = require("./models");
const app = express()
const cors = require("cors")
const jwt = require('jsonwebtoken');
require('dotenv').config();
const route = express.Router()

const corsOptions = {
    origin: ['http://localhost:8000', 'http://127.0.0.1:8000', 'http://localhost:8081', 'http://localhost:8080']
};

function authToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ msg: err });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
     if (err) return res.status(403).json({ msg: err });
     req.user = user;
     next();
  });
}

route.use(authToken);

app.use(cors(corsOptions));

app.get('/', async (req, res) => {
    console.log("Started server on localhost:9000");
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