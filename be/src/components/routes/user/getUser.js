const express = require('express')
const router = express.Router()
const { getUser } = require('../../database/query.js')

router.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    getUser(id).then(result => {
        if(result){
            console.log(result);
            res.send(result.rows[0].nickname)
        }
    }).catch(err => {
        console.log(err)
    })

})

module.exports = router