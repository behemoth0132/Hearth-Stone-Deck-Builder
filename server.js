require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const SECRET_SESSION = process.env.SECRET_SESSION;
const isLoggedIn = require('./middleware/isLoggedIn');
const axios = require('axios');
const bodyParser = require('body-parser');
const fs = require('fs');
const card = require('./controllers/card');//imported from controllers card

app.set('view engine', 'ejs');

//middleware
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(session({
    secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
    resave: false,             // Save the session even if it's modified, make this false
    saveUninitialized: true    // If we have a new session, we save it, therefore making that true
  })
);

app.use(flash());    
app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session

        // flash middleware
app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});




// const cardoptions = {//this is a card search function
//     method: 'GET',
//     url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/%7Bname%7D',
//     headers: {
//       'x-rapidapi-key': process.env.KEY,
//       'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
//     }
//   };
  


//     axios.request(cardoptions).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

  // app.get('/', function(req, res) {
  //   db.Card.findAll({
  //     include: [db.Set]
  //   }).then(function(card) {
  //     res.render('main/index', { card: card })
  //   }).catch(function(error) {
  //     console.log(error)
  //     res.status(400).render('main/404')
  //   })
  // })

  // app.use('/card', require('./controllers/card'));
  // app.use('/set', require('./controllers/set'));
  // app.use('/class', require('./controllers/class'));
 
 
 
  //searchresults page
  app.get('/searchresults', function(req, res) {
    const options = {//grabs all cards
      method: 'GET',
      url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
      headers: {
        'x-rapidapi-key': process.env.CARDKEY,
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    };

    
    axios.request(options).then(function (response) {
      console.log(response.data);
      res.render('searchresults', {allCards: response.data});
    }).catch(function (error) {
      console.error(error);
    });

  });

app.get('/', (req, res) => {
  res.render('index');
});



app.use('/auth', require('./controllers/auth'));

app.use('/', card);//card route


// app.get('/deck-builder', (req, res) => {
//   const cards = fs.readFileSync('./models/cards.json');
//   const cardsData = JSON.parse(cards);
//   res.render('deck-builder', {myCards:cardsData});
// });



// Add this below /auth controllers
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get(); 
  res.render('profile', { id, name, email });
});

const PORT = process.env.PORT || 3002;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
