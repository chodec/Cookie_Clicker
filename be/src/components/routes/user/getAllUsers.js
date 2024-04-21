const express = require('express')
const router = express.Router()

const { getAllUsers } = require('../../database/query.js')

const { validateGetAllUsers } = require('../../schema/validator/validator.js')

router.get('/getAllUsers', (req, res) => {
    if (validateGetAllUsers({})) {
        getAllUsers()
            .then(result => {
                if (result) {
                    res.send(result.rows)
                }
            })
            .catch(err => {
                res.send(err)
            })
    } else {
        res.status(500).send("Unexpected validation error")
    }
})

module.exports = router