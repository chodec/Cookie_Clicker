const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const { createAutoClicker } = require('../../database/query.js')
const { validateAutoclicker } = require('../../schema/validator/validator.js')

router.post('/createAutoclicker/:gameStateId/:clickerName/:stats', (req, res) => {
    const gameStateId = req.params.gameStateId
    const clickerName = req.params.clickerMame
    const stats = req.params.stats

    const data = { gameStateId, clickerName, stats}

    if (validateAutoclicker(data)) {
        const id = uuidv4()
        createAutoClicker(id, gameStateId, clickerName, stats)
            .then(result => {
                if (result) {
                    res.send(`The Game State ${gameStateId} has added this autoclicker ${clickerName}`)
                }
            })
            .catch(err => {
                res.send(err)
            });
    } else {
        res.status(400).send("Invalid request data")
    }
})

module.exports = router