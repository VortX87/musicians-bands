const path = require('path');
const { Sequelize, Model } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite'
})

module.exports = {
    db
};
