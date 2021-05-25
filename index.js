const express = require('express');
const app = express();
const sequelize = require('./util/db');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');
const Posts = require('./Models/Post');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || '5000';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", postsRouter);

async function main(){
    const dbConnection = await sequelize.sync();
    try {
        if (dbConnection) {
            await app.listen(port);
            console.log(port);
            
        }
    } catch (error) {
        console.log(error)
    }
}

main();