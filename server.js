const cors = require('cors');
const express = require('express')
const app = express()

app.use(cors());

app.get('/', (req, res) => {
    return res.json({message: 'Batata'})
})

app.listen('4567')