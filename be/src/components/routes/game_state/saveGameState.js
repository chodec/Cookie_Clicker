const express = require('express')
const router = express.Router()
const { saveGameState } = require('../../database/query.js')

router.patch('/saveGameState/:gameStateId/:cookieCount/:clickValue', (req, res) => {
    const id = req.params.gameStateId
    const cookieCount = req.params.cookieCount
    const clickValue = req.params.clickValue
    const lastUpdate = new Date()
    saveGameState(id, cookieCount, clickValue, lastUpdate).then(result => {
        if(result){
            console.log(`The game state ${id}, update cookie count to ${cookieCount} and click value to ${clickValue}`)
        }
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router