const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const { insertUser } = require('../../database/query.js')

router.get('/createUser/:nickname', (req, res) => {
    const nickname = req.params.nickname
    const id = uuidv4()
    const date = new Date()
    const login_date = date.getTime()
    insertUser(id, nickname, login_date).then(result => {
        if(result){
            console.log(result);
            res.send(result.rows[0].nickname)
        }
    }).catch(err => {
        console.log(err)
    })

})

module.exports = router