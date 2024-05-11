const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const { insertUser } = require('../../database/query.js')

const { validateUserCreate } = require('../../schema/validator/validator.js')

router.post('/createUser/:nickname', (req, res) => {
    const nickname = req.params.nickname

    const data = { nickname }

    if (validateUserCreate(data)) {
        const id = uuidv4()
        const login_date = new Date()

        insertUser(id, nickname, login_date)
            .then(result => {
                if (result) {
                    res.send({id: id, nickname: nickname, login_date: login_date})
                }
            })
            .catch(err => {
                res.send(err)
            })
    } else {
        res.status(400).send("Invalid request data");
    }
})

module.exports = router