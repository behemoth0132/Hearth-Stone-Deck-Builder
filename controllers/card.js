const express = require('express');
const router = express.Router();



router.get('/deck-builder', function(req, res){
    res.render('deck-builder');
});

router.post('/deck-builder', passport.authenticate('local', {
  }));

module.exports = router;
