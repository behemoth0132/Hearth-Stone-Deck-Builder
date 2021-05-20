const db = require('./models');


// db.Card.create({
//     name: 'Iceberg',
//     type: 'Warlock',
//     rarity: 'Ultra',
//     cost: 5
// }).then(createdCard=>{
// //     // the create promise returns the
// //     // new row of data that has been created
// //     // (otherwise it throws an error)
// // //     console.log(createdCard)
// // // })

// function addNewCard() {
//   db.Set.create({
//     //    name: DataTypes.STRING,
//     //cardSet: DataTypes.STRING
//     name: 'Imp',
//     cardSet: 'Demon'
//   })
//   .then(newSet => {
//     console.log(newSet);
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

// addNewCard();

// function addNewCardToSet() {
//   /*name: DataTypes.STRING,
//   text: DataTypes.STRING,
//   playerClass: DataTypes.STRING*/
//   db.Set.findOne()
//   .then(Demon => {
//     console.log(Demon.get());
//     Demon.createCard({
//       name: 'fire god',
//       text: 'has +2 attack',
//       playerClass: 'Neutral'
//     })
//     .then(newCard => {
//       console.log(newCard);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   })
// }

// addNewCardToSet();

function fetchSet() {
db.Set.findAll()
.then(Set => {
  console.log(Set);
  })
.catch(err => {
 console.log(err);
  })

}

fetchSet();