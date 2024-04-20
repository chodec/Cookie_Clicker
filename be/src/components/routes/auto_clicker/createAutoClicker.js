const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const { createAutoClicker } = require('../../database/query.js')

router.post('/createAutoclicker/:gameStateId/:clickerMame/:stats', (req, res) => {
    const gameStateId = req.params.gameStateId
    const id = uuidv4()
    const clickerName = req.params.clickerMame
    const stats = req.params.stats
    createAutoClicker(id, gameStateId, clickerName, stats).then(result => {
        if(result){
            res.send(`The Game State ${gameStateId}, has added this autoclicker ${clickerName}`)
        }
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router