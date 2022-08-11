const { db } = require('./db');
const { Sequelize, DataTypes } = require('sequelize');

// The Musician model should have name and instrument properties, both of which are strings.
const Musician = db.define('Musician', {

    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    }
})

module.exports = {
    Musician
};