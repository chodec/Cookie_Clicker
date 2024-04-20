const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const { insertUser } = require('../../database/query.js')

router.post('/createUser/:nickname', (req, res) => {
    const nickname = req.params.nickname
    const id = uuidv4()
    const login_date = new Date()
    insertUser(id, nickname, login_date).then(result => {
        if(result){
            res.send(`The user ${nickname}, with the id ${id} was created ${login_date}`)
        }
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router