const express = require('express')
require('dotenv').config()
const pokemon = require('./models/pokemon')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Pokemon = require('./models/pokeModel')

const app = express()
const port = 3000

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
app.use((req, res, next) => {
    next();
})
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//* App Routes
app.get('/', (req, res) => {
    res.send('Welcome to pokemon app.')
})

app.get('/pokemon', async (req, res) => {
    try {
        const pokemon = await Pokemon.find({})
        res.render('Index', {pokemon})
    } catch (error) {
        res.status(404).send(error, 'No Data Found!')
    }
    
})
//* Adding local data to the mongodb database
app.get('/pokemon/create', async(req, res) => {
    try {
        const pokeData = await Pokemon.insertMany(pokemon)
        res.send(pokeData)
    } catch (error) {
        res.status(201).send(error, 'Pokedata not created!')
    }
})

app.get('/pokemon/:id', async (req, res) => {
    const {id} = req.params
    try {
        const pokemon = await Pokemon.findById(id)
        res.render('Show', {
            pokemon
        })
    } catch (error) {
        res.status(404).send(error, "Pokemon not found!")
    } 
})

//* Connect to the database
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('Successfully connected to the database.')
})


app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})