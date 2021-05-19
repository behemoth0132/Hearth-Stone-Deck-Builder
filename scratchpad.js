const db = require('./models');


// db.Card.create({
//     name: 'Iceberg',
//     type: 'Warlock',
//     rarity: 'Ultra',
//     cost: 5
// }).then(createdCard=>{
//     // the create promise returns the
//     // new row of data that has been created
//     // (otherwise it throws an error)
//     console.log(createdCard)
// })

db.Card.findAll().then(cards=>{
    console.log(cards);
    // users will be an array of all User instances
  });