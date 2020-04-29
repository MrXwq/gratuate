const router = require('express').Router()

const Origin = require('../../models/Origin')

router.get('/origin', async (req, res) => {
    let model = await Origin.find()
    res.send(model)
})

module.exports = router