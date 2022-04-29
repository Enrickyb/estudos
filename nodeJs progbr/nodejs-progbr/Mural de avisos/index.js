const express = require('express');
const app = express();
const apiRoute = require('./routes/api')
const path = require("path")


app.use('/api', apiRoute)

app.use('/', express.static(path.join(__dirname, "public")))





const PORT = 3000
app.listen(PORT, ()=>{
    console.log('server running on port',PORT)
})