const express = require('express')
const pokemon = require('./models/pokemon')

const app = express()
const port = 3000

//* App Routes
app.get('/', (req, res) => {
    res.send('Welcome to pokemon app.')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})