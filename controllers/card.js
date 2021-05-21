const express = require('express');
const router = express.Router();
const db = require('../models');



router.get('/', function(req, res){
  db.card.findAll()
  .then(foundCards => {
    console.log("here is found cards")
    console.log(foundCards)
  })
})

router.post('/deck', function(req, res){
  const {img, name, text, type, playerClass} = req.body 
  const {id} = req.user
  //create card add user to card
  db.card.create({
    img, name, text, type, playerClass, userId:id
  })
  .then(newCard => {
    console.log(newCard)
    res.redirect('/');
  })
})


router.post('/deck', function(req, res) {
  //create card add user to card
  db.comment.create(
    {description:req.body.description},
    {where:{cardModelId:req.body.cardId}}
  )
  .then(createdComment => {
    console.log(createdComment)
  })
})

module.exports = router;
