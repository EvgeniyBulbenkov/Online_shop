require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const path = require('path');
const swaggerUI = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swDocument))
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello World!!!'})
})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        let time = new Date(Date.now()).toISOString();
        app.listen(PORT, () => console.log(time, `: Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
