const express = require('express');
const app = express();
const PORT = 8000;

const routes = require('./routes/routes.js')
const users = require('../users.js')

//! ----MIDDLEWARE ---------
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


routes(app)



app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`))