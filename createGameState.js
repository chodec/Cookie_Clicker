const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const { insertGameState } = require('./be/src/components/database/query.js')

const { validateGameStateCreate } = require('./be/src/components/schema/validator/validator.js')

router.post('/createGameState/:userId', (req, res) => {
    const userId = req.params.userId

    const data = { userId }

    if (validateGameStateCreate(data)) {
        const id = uuidv4()
        const cookieCount = 0
        const clickValue = 1
        const lastUpdate = new Date()

        insertGameState(id, userId, cookieCount, clickValue, lastUpdate)
            .then(result => {
                if (result) {
                    res.send(`The user ${userId}, with the ID of state ${id} was created on ${lastUpdate}. Cookie count: ${cookieCount}, Click value: ${clickValue}`)
                }
            })
            .catch(err => {
                res.send(err)
            })
    } else {
        res.status(400).send("Invalid request data")
    }
})

module.exports = router