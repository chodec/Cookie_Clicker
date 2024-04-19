const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const createUserRouter = require('./components/routes/user/createUser.js')
const getUserRouter = require('./components/routes/user/getUser.js')

const port = 3000

app.use(createUserRouter)
app.use(getUserRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})