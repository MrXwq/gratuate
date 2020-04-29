const router = require('express').Router()

const Category = require('../../models/Category')

router.post('/category', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
})
router.put('/category/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
})
router.delete('/category/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id, req.body)
    res.send({
        success: true
    })
})

router.get('/category', async (req, res) => {
    const model = await Category.find().populate('parent')
    res.send(model)
})

router.get('/category/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
})

module.exports = router