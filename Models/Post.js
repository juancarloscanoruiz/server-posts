const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Posts = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING(180),
        allowNull: false
    },
    shortDescription: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    fullDescription: {
        type: Sequelize.STRING(2500),
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    postalCode: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    location: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    url: Sequelize.STRING,
});

module.exports = Posts;