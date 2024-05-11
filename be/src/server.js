const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config({ path: './.env' })

const createUserRouter = require('./components/routes/user/createUser.js')
const getUserRouter = require('./components/routes/user/getUser.js')
const getAllUsersRouter = require('./components/routes/user/getAllUsers.js')
const createGameStateRouter = require('./components/routes/game_state/createGameState.js')
const saveGameStateRouter = require('./components/routes/game_state/saveGameState.js')
const createAutoClickerRouter = require('./components/routes/auto_clicker/createAutoClicker.js')

const port = 8000

app.use(cors())
app.use(createUserRouter)
app.use(getUserRouter)
app.use(getAllUsersRouter)

app.use(createGameStateRouter)
app.use(saveGameStateRouter)

app.use(createAutoClickerRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})