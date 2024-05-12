const express = require('express')
const router = express.Router()

const { getGameState } = require('../../database/query.js')

const { validateGameStateGet } = require('../../schema/validator/validator.js')

router.get('/getGameState/:id', (req, res) => {
    const id = req.params.id

    const data = { id }

    if (validateGameStateGet(data)) {
        getGameState(id)
            .then(result => {
                if (result) {
                    res.send(result)
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