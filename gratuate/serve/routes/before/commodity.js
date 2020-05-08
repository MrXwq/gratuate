const router = require('express').Router()

const Commodity = require('../../models/Commodity');

router.get('/commoditylist', async (req, res) => {
    const model = await Commodity.find()
    res.send(model)
})

router.get('/commoditylist/:id', async (req, res) => {
    const model = await Commodity.find({
        categories: {$elemMatch: {
            $in: req.params.id
        }}
    })
    res.send(model)
})

router.get('/commodity/:id', async (req, res) => {
    const model = await Commodity.findById(req.params.id)
    res.send(model)
})

module.exports = router