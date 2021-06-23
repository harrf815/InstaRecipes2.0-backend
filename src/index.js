
const express = require('express');
const cors = require('cors')

require('./db/mongoose')

const userRouter = require('./routers/user')
const recipeRouter = require('./routers/recipe')

const app = express()
const port = process.env.PORT 

app.use(cors())

app.use(express.json())
app.use(userRouter)
// app.use(recipeRouter)

app.listen(port, () => console.log('Server is online on port ' + port))