"use strict";

const { app, root } = require('./app');
const dotenv = require("dotenv");
const path = require("path");
const envFilePath = path.resolve(__dirname, './environment', `${process.env.NODE_ENV}.env`);
dotenv.config({ path: envFilePath });
const { constants } = require('./utils/get-constants');
const sequelize = require('./database/sql-db');
const { syncModels } = require('./models/index');
const userRoute = require('./routes/user.route');
const projectRoute = require('./routes/project.route');
const port = process.env.SERVER_PORT;

sequelize.authenticate().then(() => {
    // syncModels();
    console.log('Database connection established successfully.');
})


app.get('/', (req, res) => {
    res.status(constants.HTTP_STATUS_200).send('Backend is up');
});

app.use('/user', userRoute);
app.use('/project', projectRoute);

root.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});