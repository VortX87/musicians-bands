const { db } = require('./db');
const { Sequelize, DataTypes } = require('sequelize');

// The Band model should have name and genre properties, both of which are strings.
const Band = db.define('Band', {

    name: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
})

// async function main() {
//     await Band.sync({ force: true })

//     await Band.create({
//         name: 'Queen',
//         genre: 'Rock',

//     })
// }
// main()
module.exports = { Band };