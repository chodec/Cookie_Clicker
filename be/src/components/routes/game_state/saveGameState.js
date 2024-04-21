const express = require('express')
const router = express.Router()

const { saveGameState } = require('../../database/query.js')

const { validateGameStateSave } = require('../../schema/validator/validator.js')

router.patch('/saveGameState/:gameStateId/:cookieCount/:clickValue', (req, res) => {
    const gameStateId = req.params.gameStateId
    const cookieCount = parseInt(req.params.cookieCount)
    const clickValue = parseFloat(req.params.clickValue)

    const data = { gameStateId, cookieCount, clickValue }

    if (validateGameStateSave(data)) {
        const lastUpdate = new Date()
        saveGameState(gameStateId, cookieCount, clickValue, lastUpdate)
            .then(result => {
                if (result) {
                    res.send(`The game state ${gameStateId} has been updated: cookie count = ${cookieCount}, click value = ${clickValue}`)
                }
            })
            .catch(err => {
                res.status(500).send(err)
            })
    } else {
        res.status(400).send("Invalid request data")
    }
})

module.exports = router