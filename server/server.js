                     require('dotenv').config();
const express      = require('express');
const bodyParser   = require('body-parser');
const massive      = require('massive');
const cors         = require('cors');
const session      = require('express-session');


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))

massive(process.env.CONNECTION_STRING).then(db => {
  console.log('massive database connected using connection string')
  app.set('db', db)
});

app.get('/api/house', (req, res, next) => {
    const db = app.get('db');
    const { desiredRent } = req.query; 
    if (isNaN(desiredRent)){
      db.get_filtered_houses([0])
        .then(houses => {
          res.status(200).send(houses)
        })
        .catch(() => res.status(500).send("SERVER ERROR"));
    } else {
      const db = app.get('db')
      db.get_filtered_houses([desiredRent])
        .then(houses => {
          res.status(200).send(houses)
        })
        .catch(() => res.status(500).send("SERVER ERROR"));
    }
  });

app.get('/api/houses', (req, res, next) => {
    const db = app.get("db");
      db.get_all_houses()
      .then(houses => {
        res.status(200).send(houses)
      })
})

app.post('/api/addhouse', (req, res, next) => {
  console.log('adding house')
  // console.log(req.body)
    const db = req.app.get('db');
    const { recommendedRent, propName, propDescription, addressOne, addressTwo, addressThree, addressFour, imgURL, loan, mortgage, desiredRent } = req.body; 
    db.add_house([recommendedRent, propName, propDescription, addressOne, addressTwo, addressThree, addressFour, imgURL, loan, mortgage, desiredRent])
      .then(house => {
        res.status(200).send(house)})
      .catch((error) => {
        console.log(error)
        res.status(500).send("SERVER ERROR")}
      );
  }
);

app.delete('/api/house/:id', (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    console.log(req.params.id)
    db.delete_house([id])
      .then(() => {
        res.status(200).send()
      })
      .catch(() => res.status(500).send("SERVER ERROR"));
  });


const port = 3008;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}.`);
});