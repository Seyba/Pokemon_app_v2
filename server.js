const express = require('express')
const pokemon = require('./models/pokemon')
const jsxEngine = require('jsx-view-engine')

const app = express()
const port = 3000

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
app.use((req, res, next) => {
    next();
})
app.use(express.urlencoded({extended:false}))


//* App Routes
app.get('/', (req, res) => {
    res.send('Welcome to pokemon app.')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon})
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})