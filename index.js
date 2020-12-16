// EXPRESS AND OTHER SETUP
const express = require('express');
const { setupExpressApp } = require('./setupExpress');
const { setupHBS } = require('./setupHBS');
const MongoUtil = require('./MongoUtil.js');
const ObjectId = require('mongodb').ObjectId

// allows us to inject into the environment (the OS) our environmental variabkes
require('dotenv').config();

// create the app
const app = express();
setupExpressApp(app);
setupHBS();

async function main() {
    const MONGO_URL = process.env.MONGO_URL;
    await MongoUtil.connect(MONGO_URL, "tgc9_pokelegends");

    //Routes
    const gymleadersRoutes = require('./routes/gymleadersRoutes')
    const itemsRoutes = require('./routes/itemsRoutes')
    const movesetsRoutes = require('./routes/movesetsRoutes')
    const userdataRoutes = require('./routes/userdataRoutes')

    app.use('/gymleaders', gymleadersRoutes)
    app.use('/items', itemsRoutes)
    app.use('/movesets', movesetsRoutes)
    app.use('/userdata', userdataRoutes)
}

main();

// LISTEN
app.listen(3000, () => {
    console.log("Express is running")
})