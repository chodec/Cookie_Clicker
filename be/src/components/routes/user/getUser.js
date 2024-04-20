const express = require('express')
const router = express.Router()
const { getUser } = require('../../database/query.js')

router.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    getUser(id).then(result => {
        if(result){
            res.send(result.rows[0].nickname)
        }
    }).catch(err => {
        res.send(err)
    })

})

module.exports = router