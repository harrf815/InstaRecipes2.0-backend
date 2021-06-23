
const express = require('express');
const cors = require('cors')

require('./db/mongoose')

const app = express()
const port = process.env.PORT 

app.use(cors())

app.use(express.json())


app.listen(port, () => console.log('Server is online on port ' + port))