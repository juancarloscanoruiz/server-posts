const dotenv = require('dotenv');
dotenv.config();

const databaseName = process.env.DATABASE_NAME || 'postgres';
const databaseUser = process.env.DATABASE_USER || 'postgres';
const databasePassword = process.env.DATABASE_PASSWORD || '68t8HqmDQP8dZa';
const databaseHost = process.env.DATABASE_HOST || 'db.wiczmiwhfufntauyzvov.supabase.co';

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    // Database name
    databaseName, 
    // Database user
    databaseUser, 
    // Database password
    databasePassword, 
    {
        dialect: 'postgresql', 
        host: databaseHost,
    }
)

module.exports = sequelize;