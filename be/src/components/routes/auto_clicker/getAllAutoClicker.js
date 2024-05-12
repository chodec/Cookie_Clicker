const express = require('express')
const router = express.Router()

const { getAutoClicker } = require('../../database/query.js')

const { validateAutoClickerGet } = require('../../schema/validator/validator.js')

router.get('/getAutoclicker/:game_state_id', (req, res) => {
    const id = req.params.game_state_id

    const data = { id }

    if (validateAutoClickerGet(data)) {
        getAutoClicker(id)
            .then(result => {
                if (result) {
                    res.send(result.rows)
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