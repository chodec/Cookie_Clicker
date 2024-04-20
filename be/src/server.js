const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const createUserRouter = require('./components/routes/user/createUser.js')
const getUserRouter = require('./components/routes/user/getUser.js')
const getAllUsersRouter = require('./components/routes/user/getAllUsers.js')

const createGameStateRouter = require('./components/routes/game_state/createGameState.js')

const port = 3000

app.use(createUserRouter)
app.use(getUserRouter)
app.use(getAllUsersRouter)

app.use(createGameStateRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})