const express = require('express')
const router = express.Router()
const { getAllUsers } = require('../../database/query.js')

router.get('/getAllUsers', (req, res) => {
    getAllUsers().then(result => {
        if(result){
            res.send(result.rows)
        }
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router