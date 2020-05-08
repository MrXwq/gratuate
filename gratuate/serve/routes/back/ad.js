const router = require('express').Router()

const Ad = require('../../models/Ad')

router.post('/ad', async (req, res) => {
    const model = await Ad.create(req.body)
    res.send(model)
})
router.put('/ad/:id', async (req, res) => {
    const model = await Ad.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
})
router.delete('/ad/:id', async (req, res) => {
    await Ad.findByIdAndDelete(req.params.id, req.body)
    res.send({
        success: true
    })
})
router.get('/ad', async (req, res) => {
    let model = await Ad.find()
    res.send(model)
})
router.get('/ad/:id', async (req, res) => {
    const model = await Ad.findById(req.params.id)
    res.send(model)
})

module.exports = router