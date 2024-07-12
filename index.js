//MODULE IMPORTS
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const styledLog = require('./helpers/styledLog')
const { HTTPResponse } = require('./classes/classes')
const { requestLogger } = require('./middlewares/requestLogger')
const { liveLocation } = require('./coreFunctions/liveLocation')
const { connectToDB } = require('./helpers/connectToDB')

//INITIALIZE EXPRESS
const app = express()
const port = process.env.PORT || 4001

app.use(cors())
app.use(express.json());
app.use(requestLogger)

connectToDB()

//ROUTES
app.get('/', (req, res) => {
    res.send(new HTTPResponse().error('Not found', 404))
})

app.post('/', (req, res) => {
    res.send(new HTTPResponse().error('Not found', 404))
})

app.post('/health', (req, res) => {
    res.send(new HTTPResponse().success(null, 'Service is healthy!'))
})

app.post('/liveLocation', (req, res) => {
    liveLocation(req, res)
})

//START APP
styledLog({ colour: 'yellow', style: 'bold' }, '⚙ Initializing KW-MS-OBDCOMMS Server...')
try {
    app.listen(port, () => {
        styledLog({ colour: 'green', style: 'bold' }, `✓ KW-MS-OBDCOMMS - Server initialized on port ${port}.`)
    })
} catch (error) {
    styledLog({ colour: 'red', style: 'bold' }, `✘ KW-MS-OBDCOMMS - Failed to initialize server!`)
    styledLog({ colour: 'red', style: 'normal' }, error)
}