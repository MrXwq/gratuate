const router = require('express').Router()

const Service = require('../../models/Service')

router.post('/service', async (req, res) => {
    const model = await Service.create(req.body)
    res.send(model)
})
router.put('/service/:id', async (req, res) => {
    const model = await Service.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
})
router.delete('/service/:id', async (req, res) => {
    await Service.findByIdAndDelete(req.params.id, req.body)
    res.send({
        success: true
    })
})
router.get('/service', async (req, res) => {
    let model = await Service.find()
    res.send(model)
})
router.get('/service/:id', async (req, res) => {
    const model = await Service.findById(req.params.id)
    res.send(model)
})

module.exports = router