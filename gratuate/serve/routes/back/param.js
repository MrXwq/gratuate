const router = require('express').Router()

const Param = require('../../models/Param')

router.post('/param', async (req, res) => {
    const model = await Param.create(req.body)
    res.send(model)
})
router.put('/param/:id', async (req, res) => {
    const model = await Param.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
})
router.delete('/param/:id', async (req, res) => {
    await Param.findByIdAndDelete(req.params.id, req.body)
    res.send({
        success: true
    })
})
router.get('/param', async (req, res) => {
    let model = await Param.find()
    res.send(model)
})
router.get('/param/:id', async (req, res) => {
    const model = await Param.findById(req.params.id)
    res.send(model)
})

module.exports = router