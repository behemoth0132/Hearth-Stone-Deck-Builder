const express = require('express');
const router = express.Router();
const db = require('../models');




router.get('/deck-builder', function(req, res){
    res.render('deck-builder');
});

router.post('/deck', function(req, res){
  const {img, name, text, type, playerClass} = req.body 
  const {id} = req.user
  //create card add user to card
  db.card.create({
    img, name, text, type, playerClass, userId:id
  })
  .then(newCard => {
    console.log(newCard)
  })
})



module.exports = router;
