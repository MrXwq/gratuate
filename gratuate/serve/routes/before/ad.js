const router = require('express').Router()

const Ad = require('../../models/Ad');

router.get('/ad', async (req, res) => {
    const model = await Ad.find()
    res.send(model)
})


module.exports = router