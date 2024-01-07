const express = require('express')
const Joi = require('joi');
const path = require('path')

const app = express();
const BP = require('body-parser');
const fs = require('fs');

function getCookies(req) {
    if (req.headers.cookie == null) return {};


    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};


    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });


    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
    if (token == null) return res.redirect(301, '/login');
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.redirect(301, '/login');
        req.user = user;
        next();
    });
}



app.use('/novo-knjiga', BP.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post("/novo-knjiga", (req, res) => {
    const shema = Joi.object().keys({
        naziv: Joi.string().trim().min(5).max(25).required(),
        opis: Joi.string().trim().min(1).required(),
        kategorija: Joi.string().trim().min(1).required(),
        cena: Joi.number().greater(0).required()
    });
    const {error, succ} = shema.validate(req.body);

    if(error){
        res.send("Greska: " + error.details[0].message);
	  return;
    } 

    req.body.opis.replace(`/\r?\n|\r/g`, '<br>');

    fs.appendFile("knjiga.txt", "\n" +
    JSON.stringify(req.body), 
    function(err, succ){
        res.send("Poruka je poslana, očekujte odgovor uskoro");
    }
);
})

app.get("/knjige", (req, res) => {
    const knjige = [];

    fs.readFile('knjiga.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return res.status(500).send({ error: "Greška" });
        }

        const redovi = data.split('\n');
        
        for(let i=0; i<redovi.length; i++){
            let obj = JSON.parse(redovi[i]);
            knjige.push(obj);
        }
        
        return res.json(knjige);
      });
    
})

app.get('/administrator/register', (req, res) => {
    res.sendFile('register.html', { root: './static/admin' });
});


app.get('/administrator/login', (req, res) => {
    res.sendFile('login.html', { root: './static/admin' });
});


app.get('/administrator', authToken, (req, res) => {
    res.sendFile('index.html', { root: './static/admin' });
});

    

app.listen(8000, ()=>{
    console.log('Listening on port 8000...');
})