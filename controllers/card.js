const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');


router.get('/search',(request,response) => {
    //code to perform particular action.
    //To access GET variable use req.query() and req.params() methods.
});

router.post('/search',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
});




module.exports = router;
