const express = require('express')
const app = express()


app.get('/', (req, res) => {
    return res.json({message: 'OK'})
})

app.listen('4567')