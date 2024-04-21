const express = require('express')
const router = express.Router()

const { getUser } = require('../../database/query.js')

const { validateUserGet } = require('../../schema/validator/validator.js')

router.get('/getUser/:id', (req, res) => {
    const id = req.params.id

    const data = { id }

    if (validateUserGet(data)) {
        getUser(id)
            .then(result => {
                if (result) {
                    res.send(result.rows[0].nickname)
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