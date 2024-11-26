const express = require('express');
const cors = require('cors');
const { connection } = require('./db');
const { contactRoute } = require('../routes/contactHome.routes');


require('dotenv').config();
const port = process.env.PORT || 4000 
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', contactRoute)

app.get('/', (req, res) => {
    res.send({
        message: 'api is working'
    })
})

app.listen(port, async()=> {
    try{
        await connection
        console.log('db is connected')
    } catch (err) {
        console.log(err.message)
    }
    console.log('server is running on port http://localhost:' + port);
});