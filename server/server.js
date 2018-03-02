                        require('dotenv').config();
const express         = require('express');
const session         = require('express-session');
const bodyParser      = require('body-parser');
const massive         = require('massive');
const cors            = require('cors');
const checkForSession = require('./middlewares/checkForSession.js');



var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))
// app.use(checkForSession);

//DB CONNECTION

massive(process.env.CONNECTION_STRING).then(db => {
  console.log('massive database connected using connection string')
  app.set('db', db)
});


//GET

app.get('/api/filteredhouses/:desiredRent', (req, res, next) => {
      const db = app.get('db')
      const desiredRent = req.params.desiredRent
      console.log('desired rent', desiredRent)
      db.get_filtered_houses([desiredRent])
        .then(houses => {
          console.log('this is the one ur looking for', houses)
          res.status(200).send(houses)
        })
        .catch(() => res.status(500).send("SERVER ERROR"));
    });

// app.get('/api/filteredhouses/:userid/:desiredRent', (req, res, next) => {
//       const db = app.get('db')
//       const {desiredRent, userid} = req.body
//       console.log('desired rent', desiredRent, 'user id', userid)
//       db.get_filtered_houses([userid, desiredRent])
//         .then(houses => {
//           res.status(200).send(houses)
//         })
//         .catch(() => res.status(500).send("SERVER ERROR"));
//     });

app.get('/api/houses/:userid', (req, res, next) => {
    const db = app.get("db");
    const {userid} = req.params
    console.log('this is the USERID GET HOUSES LINE 47--', userid)
      db.get_all_houses([userid])
      .then(houses => {
        console.log(houses)
        res.status(200).send(houses)
      })
})

app.post('/api/users', (req, res, next) => {
  const db = app.get("db");
  const { session } = req;
  const { username, password } = req.body;
  console.log('\n\n==================\nreq dot body GET USER LINE 59 --', req.body)
     db.get_user([username, password])
        .then(user => {
          console.log('user GET USER LINE 62 --', user)
          if (user.length === 0){
          res.status(500).send('Unauthorized.')
          } else {
            session.user = user[0]
            console.log('this is the session GET USER LINE 67 --', session)
            console.log('user GET USER LINE 68 --', user[0].userid)
            res.status(200).send(user)

          }
        })
})


//POST

app.post('/api/addhouse', (req, res, next) => {
  console.log('adding house')
  console.log('this is the user in session ADD HOUSE LINE 90 --', req.session.user)
    const db = req.app.get('db');
    const { recommendedRent, propName, propDescription, addressOne, addressTwo, addressThree, addressFour, imgURL, loan, mortgage, desiredRent, userid } = req.body; 
    db.add_house([recommendedRent, propName, propDescription, addressOne, addressTwo, addressThree, addressFour, imgURL, loan, mortgage, desiredRent, req.session.user.userid])
      .then(house => {
        res.status(200).send(house)})
      .catch((error) => {
        console.log(error)
        res.status(500).send("SERVER ERROR")}
      );
  }
);

app.post('/api/adduser/:username/:password/', (req, res, next) => {
  const db = req.app.get('db');
  const { username, password } = req.body;
  db.create_user([username, password])
     .then(user => {
       session.user = user[0]
       res.status(200).send(user)
     })
})

app.post('/api/login', (req, res, next) => {
  const { session } = req;
        const { username, password } = req.body;

        const db = app.get("db");

        if (user) {
            user.username = req.body.username;
            res.status(200).send(session.user);
        } else {
            res.status(500).send('Unauthorized.')
        }
})

app.post('/api/signout', (req, res, next) => {
  const { session } = req;
        const db = app.get("db")
        session.destroy();
        console.log('SIGNOUT LINE 131 logged out of --', session)
        res.status(200).send(req.session);
})


//DELETE

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