const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const { insertGameState } = require('../../database/query.js')

router.patch('/createGameState/:gameStateId', (req, res) => {
    const id = req.params.gameStateId
    const autoclickerId = null
    const cookieCount = 0
    const clickValue = 1
    const lastUpdate = new Date()
    insertGameState(id, userId, autoclickerId, cookieCount, clickValue, lastUpdate).then(result => {
        if(result){
            res.send(`The user ${userId}, with the id of state ${id} was created ${lastUpdate}. Cookie count ${cookieCount}, Click value ${clickValue}`)
        }
    }).catch(err => {
        res.send(err)
    })

})

module.exports = router