# Title of Game

Hearth-Stone-Deck-Builder

# How it Works
It is a deck builder where you can add cards to your personal page in order to determine what kind of deck you are building. You have the ability of logging in and making an account as well so your deck will be special to you! 

## Start Up Screen:
![Hearth-Stone-Deck-Builder Intro](https://media.giphy.com/media/NF1zsMWzj6Np0lbUNE/giphy.gif)

# HOW TO INSTALL
1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play
![alt text](https://i.imgur.com/Pc55FJf.png)
![alt text](https://i.imgur.com/D7BTLcW.png)
![alt text](https://i.imgur.com/rdb6WnX.png)
![alt text](https://i.imgur.com/KoTr4U1.png)
# HOW IT WORKS
The technology used in this app includes a lot of Javascript, some CSS and EJS. It is pretty and useful at the same time.
Below is an example of some of the design code that I used. 
```
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.card.belongsTo(models.user);
      models.card.belongsTo(models.set);
    }
  };
  card.init({
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    img: DataTypes.STRING,
    playerClass: DataTypes.STRING,
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    setId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'card',
  });
  return card;
};
```
# FUTURE CONSIDERATIONS

I would like to organize everything a bit and add more filtering options for looking for different types of cards.
![Hearth-Stone-Future](https://media.giphy.com/media/4XdeX4ryBruU6EDfeu/giphy.gif)


# PROCESS WORK

## Initial Wireframes:
![Game Play_Game Play ](https://user-images.githubusercontent.com/81875454/116032576-f0e1c880-a62d-11eb-8fad-80ff430d7d93.png)

# SOURCES
https://codepen.com
https://stackoverflow.com
https://brian&rome.com
https://developer.mozilla.org

